import { post } from "../../../utils/interceptors";

export const authentication = (payload) => {
  return post(`/login`, payload)
}

export const register = (payload) => {
  return post(`/register`, payload)
}