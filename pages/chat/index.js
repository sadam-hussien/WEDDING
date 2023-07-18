import { Col, Container, Row } from "react-bootstrap";

import { ListOfChats, ChatBox } from "@/modules/chat/components";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { layout_styles } from "@/modules/profile/constants";

import HomeLayout from "@/layout/homeLayout";

import { pusherGetMessage, pusherSubscribe } from "@/pusher";
import { useFetch, usePost } from "@/hooks";
import { api_server_open_chat } from "@/modules/chat/server";

import { useRouter } from "next/router";

export default function Chat() {
  const { query } = useRouter();

  const { user } = useSelector((state) => state.auth);

  const [currentConversationData, setCurrentConversationData] = useState({});

  const { mutate, isLoading, data } = usePost({
    queryFn: api_server_open_chat,
    alert: false,
  });

  useEffect(() => {
    if (query?.id) {
      mutate(
        {
          user_id: query?.id,
        },
        {
          onSuccess: (data) => {
            setCurrentConversationData(data.data);
          },
        }
      );
    }
  }, [query?.id]);

  useEffect(() => {
    if (Object.keys(currentConversationData).length) {
      console.log(currentConversationData.chat_id);
      pusherGetMessage(currentConversationData.chat_id).bind(
        "send-message-event",
        (data) => {
          console.log("chat", data);
        }
      );
    }
  }, [currentConversationData]);

  useEffect(() => {
    pusherSubscribe.bind("new-chat-event", (data) => {});
  }, []);

  return (
    <section className="chat-page-container">
      <Container>
        <Row className="g-4">
          <Col lg={{ order: "first", span: 7 }} xs={{ order: "last" }}>
            <ChatBox
              user={user}
              currentConversationData={currentConversationData}
            />
          </Col>

          <Col lg={5}>
            <ListOfChats
              user={user}
              setCurrentConversationData={setCurrentConversationData}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Chat.getLayout = function getLayout(page) {
  return (
    <HomeLayout
      containerProps={layout_styles.containerProps}
      headerProps={layout_styles.headerProps}
    >
      {page}
    </HomeLayout>
  );
};

// if user is logged in redirect to home page
export async function getServerSideProps({ req }) {
  const isAuth = req.cookies.access_token;
  if (!isAuth) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
