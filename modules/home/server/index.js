import Api from "@/server/axios";

export function api_buy_package(data) {
  return Api().post("user/buy/package", data);
}
