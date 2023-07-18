import { useEffect, useState } from "react";

import { InputWithIcon } from "@/components";

import { handleDate } from "@/helpers";
import { useFetch } from "@/hooks";
import { api_server_get_rooms } from "../server";
import { Spinner } from "react-bootstrap";
import Link from "next/link";

export default function ListOfChats({ ...props }) {
  // list of conversations
  // const [listOfConversations, setListOfConversations] = useState([
  //   {
  //     member_b_id: {
  //       avatar: "/images/user-placeholder.png",
  //       name: "اسلام اشرف",
  //     },

  //     member_a_id: {
  //       name: "اسلام اشرف",
  //     },

  //     updatedAt: new Date(),

  //     chats: [
  //       {
  //         message: "ازيك ي عم محمود",
  //       },
  //     ],
  //   },
  // ]);

  const { data: listOfConversations, isLoading } = useFetch({
    queryFn: api_server_get_rooms,
    queryKey: "get-rooms-list",
  });

  if (isLoading) {
    return (
      <Spinner as="span" animation="border" role="status" aria-hidden="true" />
    );
  }

  return (
    <div className="box chat-conversations-list">
      {/* <input
        name="chat-search"
        type="search"
        id="chat-search"
        icon="las la-search"
        placeholder="إبحث عن رسالة"
        className={`form-control input-withicon mb-4 chat-conversations-list-search`}
        onChange={(e) => console.log(e.target.value)}
      /> */}
      {listOfConversations.data.map((item, index) => (
        <Link
          href={{
            pathname: "/chat",
            query: { id: item.user.id },
          }}
          key={index}
          className="bg-transparent border-0 p-0 d-flex justify-content-between flex-wrap gap-2 chat-conversations-list-item w-100"
        >
          <div className="d-flex align-items-center gap-2">
            <img
              src={item.user?.avatar || "/images/user-placeholder.png"}
              alt=""
              className="img-fluid chat-conversations-list-item-img"
            />
            <div className="flex-fill chat-conversations-list-item-info text-end">
              <span className="chat-box-header-info-name d-flex flex-column gap-1">
                {item.user?.first_name} {item.user?.middle_name}{" "}
                {item.user?.last_name}
                <span>{item?.message}</span>
              </span>
            </div>
          </div>

          <span className="me-auto">{handleDate(item.updated_at)}</span>
        </Link>
      ))}
    </div>
  );
}
