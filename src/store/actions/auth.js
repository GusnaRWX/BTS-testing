import { AUTHENTICATION_REQUESTED, REGISTER_REQUESTED } from "../constants";

export const authentication = (payload) => ({
  type: AUTHENTICATION_REQUESTED, payload: payload
})

export const register = (payload) => ({
  type: REGISTER_REQUESTED, payload: payload
})