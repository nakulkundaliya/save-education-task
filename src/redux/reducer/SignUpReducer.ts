import { SignUserAction } from "Interfaces";
import * as Types from "../types";

const initialState = { user: null, loading: false };

export const SignupReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SIGNUP_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case Types.SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default SignupReducer;
