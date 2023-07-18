import Api from "@/server/axios";

export function api_server_open_chat(user) {
  return Api().post("user/chat/start", user);
}

export function api_server_send_message(data) {
  return Api().post("user/chat/message", data);
}

export function api_server_get_messages(id) {
  return Api().get(`user/chat/message/${id}`);
}

export function api_server_get_rooms() {
  return Api().get(`user/chat/rooms`);
}
