import Pusher from "pusher-js";

import store from "@/store";

const pusherClient = new Pusher("e28c3262971fb390a366", {
  cluster: "us2",
});

const userState = store.getState();

const userId = userState.auth.user?.data?.id;

let channelName = "user_" + userId;

export const pusherSubscribe = pusherClient.subscribe(channelName);

export const pusherGetMessage = (id) => {
  return pusherClient.subscribe(id);
};
