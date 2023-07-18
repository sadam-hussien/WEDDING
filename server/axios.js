import axios from "axios";

import store from "@/store";

import Cookies from "js-cookie";

import { logout } from "@/modules/auth/store";

export default function Api(token) {
  const tokenInCookes = token ? token : Cookies.get("access_token");

  const appClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${tokenInCookes}`,
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
      const msg = error?.response?.data?.message || error?.response?.data?.msg;
      const errors = ["Unauthenticated", "you don't have a verified email"];
      if (errors.includes(msg)) {
        Cookies.remove("access_token");
        store.dispatch(logout());
        window.location.href = "/auth";
      }
      return Promise.reject(error.response);
    }
  );

  return appClient;
}
