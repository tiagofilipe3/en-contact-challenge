import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./types";
import fakeLogin from "../utils";

export const login = (username, password) => (dispatch) => {
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
