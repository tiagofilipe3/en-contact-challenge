import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./actions";

export interface LoginProps {
  Login: {
    logged: boolean;
    isLogging: boolean;
    loginFailure: boolean;
  };
}

const initialState = {
  logged: false,
  isLogging: false,
  loginFailure: false,
};

const index = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        logged: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        loginFailure: true,
      };
    default:
      return state;
  }
};

export default index;
