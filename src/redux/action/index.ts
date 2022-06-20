import * as Type from "../types";
import { AxiosRequestConfig } from "axios";
import { ApiRequest } from "../../services/apiConfig";
import { toast } from "react-toastify";

export const signInUser = (username: string, password: string) => {
  return async (dispatch: any) => {
    const config: AxiosRequestConfig = {
      url: `/sign-in`,
      method: "PATCH",
      params: { username, password }
    };
    dispatch({ type: Type.SIGN_USER_BEGIN });
    try {
      const res = await ApiRequest(config);
      toast("User logged successfully");
      return dispatch({
        type: Type.SIGN_USER_SUCCESS,
        payload: res
      });
    } catch (error) {
      toast("Something went wrong");
      return dispatch({
        type: Type.SIGN_USER_FAILURE,
        payload: "Something went wrong"
      });
    }
  };
};

export const signUpUser = (
  username: string,
  password: string,
  confirmPassword: string
) => {
  return async (dispatch: any) => {
    const config: AxiosRequestConfig = {
      url: `/sign-up`,
      method: "PATCH",
      params: { username, password, confirmPassword }
    };
    dispatch({ type: Type.SIGNUP_USER_BEGIN });
    try {
      const res = await ApiRequest(config);
      toast("User register successfully");
      return dispatch({
        type: Type.SIGNUP_USER_SUCCESS,
        payload: res
      });
    } catch (error) {
      toast("Something went wrong");
      return dispatch({
        type: Type.SIGNUP_USER_FAILURE,
        payload: "Something went wrong"
      });
    }
  };
};

export const forgotPassword = (
  newPassword: string,
  confirmNewPassword: string
) => {
  return async (dispatch: any) => {
    const config: AxiosRequestConfig = {
      url: `/reset-password`,
      method: "PATCH",
      params: { newPassword, confirmNewPassword }
    };
    dispatch({ type: Type.FORGOT_PASSWORD_BEGIN });
    try {
      const res = await ApiRequest(config);
      toast("Reset your password successfully");
      return dispatch({
        type: Type.FORGOT_PASSWORD_SUCCESS,
        payload: res
      });
    } catch (error) {
      toast("Something went wrong");
      return dispatch({
        type: Type.FORGOT_PASSWORD_FAILURE,
        payload: "Something went wrong"
      });
    }
  };
};

export const logout = () => ({
  type: Type.LOGOUT
});
