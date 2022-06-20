import { ForgotUserAction } from "Interfaces";
import * as Types from "../types";

const initialState = { user: null, loading: false };

export const ForgotPasswordReducer = (
  state = initialState,
  action: ForgotUserAction
) => {
  const { type, payload } = action;
  switch (type) {
    case Types.FORGOT_PASSWORD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case Types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;
