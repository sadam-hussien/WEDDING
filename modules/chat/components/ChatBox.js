import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";

import { handleDate } from "@/helpers";

import { DynamicFileUploaderInput, InputWithIcon } from "@/components";

import EmojiPicker from "emoji-picker-react";

import { useFetch, usePost } from "@/hooks";

import { Spinner } from "react-bootstrap";

import { api_server_send_message, api_server_get_messages } from "../server";

export default function ChatBox({ ...props }) {
  const [emojiIsShow, setEmojiIsShow] = useState(false);

  const { currentConversationData } = props;

  const chatId = currentConversationData?.chat_id;

  const { data: dataChatMessages, isLoading: isLoadingGetChatMessages } =
    useFetch({
      queryFn: () => api_server_get_messages(chatId),
      queryKey: ["get-chat-messages", chatId],
      options: {
        enabled: !!chatId,
      },
    });

  // const reversedData = dataChatMessages?.data.reverse();

  const { mutate, isLoading } = usePost({
    queryFn: api_server_send_message,
    alert: false,
  });

  // handle submit
  function handleSubmit(values, actions) {
    mutate(
      {
        chat_id: currentConversationData.chat_id,
        msg: values.message,
      },
      {
        onSettled: () => {
          actions.resetForm();
        },
      }
    );
  }

  if (Object.keys(currentConversationData).length && dataChatMessages?.data) {
    return (
      <div className="box chat-box chat-height d-flex flex-column">
        {/* header  */}
        <div className="d-flex align-items-center justify-content-between chat-box-header">
          {/* info  */}
          <div className="chat-box-header-info d-flex align-items-center gap-3">
            <img
              src={
                currentConversationData.user?.avatar ||
                "/images/user-placeholder.png"
              }
              alt="avatar"
              className="img-fluid d-none d-md-block"
            />
            <span className="chat-box-header-info-name d-flex flex-column gap-1">
              {currentConversationData.user.first_name}{" "}
              {currentConversationData.user.middle_name}{" "}
              {currentConversationData.user.last_name}
              <span></span>
            </span>
          </div>

          <button type="button" className="bg-transparent p-0 border-0">
            <i className="las la-ellipsis-h"></i>
          </button>
        </div>
        {/* body  */}
        <div className="chat-box-body flex-fill d-flex flex-column">
          {/* chat content  */}
          <div className="flex-fill chat-box-body-list">
            {dataChatMessages.data.map((item, index) => (
              <div
                key={index}
                className={`chat-box-body-list-item d-flex gap-2 ${
                  item.from === props.user?.data.id ? "sender" : "receiver"
                }`}
              >
                {item.from !== props.user?.data.id && (
                  <img
                    src={
                      currentConversationData?.member_b_id?.avatar ||
                      "/images/user-placeholder.png"
                    }
                    alt=""
                    className="img-fluid chat-box-body-list-item-avatar d-none d-md-block"
                  />
                )}

                <div className="chat-box-body-list-item-info">
                  <div className="d-flex align-items-center gap-2">
                    {item.from !== props.user?.data.id && (
                      <span className="chat-box-body-list-item-info-name">
                        {currentConversationData.user?.first_name}{" "}
                        {currentConversationData.user?.middle_name}
                      </span>
                    )}
                    <span className="chat-box-body-list-item-info-date">
                      {handleDate(item.updated_at)}
                    </span>
                  </div>

                  {/* handle message  */}
                  <div className="chat-box-body-list-item-info-message">
                    {item.file && (
                      <img src={item.file} alt="" className="img-fluid" />
                    )}

                    {item.message && <span>{item.message}</span>}
                  </div>

                  {item.from === props.user?.data.id && (
                    <i className="las la-check-double"></i>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* form  */}
          <Formik
            initialValues={{ message: "", file: "" }}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="chat-box-body-form d-flex align-items-center gap-3 position-relative">
                  <div className="d-flex align-items-center flex-fill chat-box-body-form-input h-100 position-relative">
                    <div className={`emoji-box ${emojiIsShow ? "active" : ""}`}>
                      {/* <EmojiPicker
                onEmojiClick={(e) => {
                  setFieldValue("message", values.message + e.emoji);
                  setEmojiIsShow((prev) => !prev);
                }}
              /> */}
                      <Emoji
                        setFieldValue={setFieldValue}
                        setEmojiIsShow={setEmojiIsShow}
                        values={values}
                      />
                    </div>
                    <button
                      type="button"
                      className="chat-box-body-form-emoji bg-transparent border-0 p-0 h-100"
                      onClick={() => setEmojiIsShow((prev) => !prev)}
                    >
                      <i className="las la-smile"></i>
                    </button>
                    <InputWithIcon
                      type="text"
                      name="message"
                      placeholder="إكتب رسالتك ....."
                      id="message-text"
                      autoComplete={"off"}
                      noBorder
                      containerStyle={{ marginBottom: 0, flex: 1 }}
                    />
                  </div>

                  <button
                    type="button"
                    className="chat-box-body-form-camera chat-box-body-form-btn border-0 p-0 d-none d-md-block"
                  >
                    <i className="las la-camera"></i>
                  </button>
                  <div className="d-none d-lg-block">
                    <DynamicFileUploaderInput
                      item={{ name: "file", id: "chat-file-uploading" }}
                      // serverCallback={mutateImageUploading}
                    >
                      <UploadingBtn
                        name="file"
                        // isLoading={isLoadingImageUploading}
                      />
                    </DynamicFileUploaderInput>
                  </div>

                  <button
                    type="submit"
                    className="chat-box-body-form-btn chat-box-body-form-submit p-0 border-0"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <i className="las la-paper-plane"></i>
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }

  return (
    <div className="box chat-box chat-height d-flex flex-column">
      <img src="/images/chat.jpg" alt="" className="img-fluid chat-empty-img" />
    </div>
  );
}

function UploadingBtn({ files, deleteFile, isLoading }) {
  return (
    <>
      <div className="cursor-pointer chat-box-body-form-file chat-box-body-form-btn">
        <i className="las la-paperclip"></i>
      </div>
      {isLoading || files ? (
        <div className="position-absolute chat-uploading-img">
          <div className="position-relative">
            <img
              src={
                files
                  ? typeof files === "string"
                    ? files
                    : window.URL.createObjectURL(files)
                  : "/images/placholder.png"
              }
              alt="placholder"
              className="img-fluid subscription-upload-img-img"
            />
            {isLoading && (
              <>
                <div className="position-absolute overlay-when-uploading-image d-flex align-items-center justify-content-center">
                  <Spinner
                    as="span"
                    animation="border"
                    size="md"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

const Emoji = React.memo(({ setFieldValue, setEmojiIsShow, values }) => {
  return (
    <EmojiPicker
      onEmojiClick={(e) => {
        setFieldValue("message", values.message + e.emoji);
        setEmojiIsShow((prev) => !prev);
      }}
    />
  );
});
