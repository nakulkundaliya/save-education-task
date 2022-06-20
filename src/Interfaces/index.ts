import * as Types from "redux/types";
// Create User

// Actions Creator
export interface user {
  id: string;
  name: string;
}

// Action type in reducer
type SignInUserActionTypes =
  | typeof Types.SIGN_USER_BEGIN
  | typeof Types.SIGN_USER_SUCCESS
  | typeof Types.SIGN_USER_FAILURE;

export interface SignInUserAction {
  type: SignInUserActionTypes;
  payload?: user | string;
}

type SignUpUserActionTypes =
  | typeof Types.SIGNUP_USER_BEGIN
  | typeof Types.SIGNUP_USER_SUCCESS
  | typeof Types.SIGNUP_USER_FAILURE;

export interface SignUserAction {
  type: SignUpUserActionTypes;
  payload?: user | string;
}

type ForgotActionTypes =
  | typeof Types.FORGOT_PASSWORD_BEGIN
  | typeof Types.FORGOT_PASSWORD_SUCCESS
  | typeof Types.FORGOT_PASSWORD_FAILURE;

export interface ForgotUserAction {
  type: ForgotActionTypes;
  payload?: user | string;
}
