import { SignInUserAction } from "Interfaces";
import * as Types from "../types";

const initialState = { user: null, loading: false };

export const LoginReducer = (
  state = initialState,
  action: SignInUserAction
) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SIGN_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.SIGN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case Types.SIGN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default LoginReducer;
