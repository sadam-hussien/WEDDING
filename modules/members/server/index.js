import Api from "@/server/axios";

export function api_get_profiles(config) {
  return Api().get("user/profiles", {
    params: config,
  });
}
