import { Dispatch, AnyAction } from "redux";
import fakeLogin from "../utils";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username: string, password: string) => (
  dispatch: Dispatch<AnyAction>
) => {
  dispatch({
    type: LOGIN_START,
  });

  setTimeout(() => {
    const loginRes = fakeLogin(username, password);
    dispatch({
      type: loginRes ? LOGIN_SUCCESS : LOGIN_FAILURE,
    });
  }, 500);
};

export const logout = () => {};
