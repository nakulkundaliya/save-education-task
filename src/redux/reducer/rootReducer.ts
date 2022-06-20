import { combineReducers } from "redux";
import { LOGOUT } from "redux/types";
import ForgotPasswordReducer from "./ForgotPasswordReducer";
import { LoginReducer } from "./LoginReducer";
import { SignupReducer } from "./SignUpReducer";

const appReducer = combineReducers({
  userData: LoginReducer,
  signupUserData: SignupReducer,
  forgotPasswordData: ForgotPasswordReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
