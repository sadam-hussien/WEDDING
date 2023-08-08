import Api from "@/server/axios";

export function api_buy_package(data) {
  return Api().post("user/buy/package", data);
}

export function api_get_packages() {
  return Api().get("packages");
}
