import { AUTHENTICATION_REQUESTED, AUTHENTICATION_RESPONSE, REGISTER_REQUESTED, REGISTER_RESPONSE } from "../constants";

const initialState = {
  loading: false,
  error: null,
  message: '',
  statusCode: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action?.type) {
    case AUTHENTICATION_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case AUTHENTICATION_RESPONSE:
      return {
        ...state,
        loading: false
      }
    case REGISTER_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case REGISTER_RESPONSE:
      return {
        ...state,
        loading: false,
        statusCode: action?.payload?.statusCode,
        message: action?.payload?.message
      }
    default:
      return state
  }
}