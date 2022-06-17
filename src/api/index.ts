import request from "../utils/request";

export function article() {
  return request({
    url: "/profile ",
    method: "get"
  });
}
