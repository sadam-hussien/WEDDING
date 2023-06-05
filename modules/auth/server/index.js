import Api from "@/server/axios";

export function api_login(data) {
  return Api().post("auth/login", data);
}

export function api_register(data) {
  return Api().post("register", data);
}
