import axios from "axios";

import store from "@/store";

import Cookies from "js-cookie";

import { logout } from "@/modules/auth/store";

export default function Api() {
  console.log(store);
  const {
    auth: { user },
  } = store.getState();

  console.log(user);
  const appClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${user ? user.access_token : null}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "ar",
      "Content-Language": "ar",
    },
  });
  appClient.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error?.response?.data?.message.includes("Unauthenticated")) {
        Cookies.remove("access_token");
        store.dispatch(logout());
        window.location.href = "/auth";
      }
      return Promise.reject(error.response);
    }
  );

  return appClient;
}
