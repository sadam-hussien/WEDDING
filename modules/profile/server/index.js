import Api from "@/server/axios";

export function api_send_data(data) {
  return Api().post("user/profile", data);
}

export function api_get_data() {
  return Api().get("user/profile");
}

export function api_upload_photo(data) {
  return Api().post("user/upload/photo", data);
}
