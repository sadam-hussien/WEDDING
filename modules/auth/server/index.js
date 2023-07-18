import Api from "@/server/axios";

export function api_login(data) {
  return Api().post("auth/login", data);
}

export function api_register(data) {
  return Api().post("register", data);
}

export function api_verify_email(token, data) {
  return Api(token).post("auth/account/verify", data);
}

export function api_resend_email(token) {
  return Api(token).post("auth/account/otp/resend");
}
