const LOGIN = "loginAction/LOGIN";
const SET_LOGIN_DATA = "loginAction/SET_LOGIN_DATA";

export const setLogin = (bool) => {
  return {
    type: LOGIN,
    isLogin: bool,
  };
};

export const setLoginData = (data) => {
  return {
    type: SET_LOGIN_DATA,
    loginData: data,
  };
};

const initialState = {
  isLogin: false,
  loginData: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };

    case SET_LOGIN_DATA:
      return {
        ...state,
        loginData: action.loginData,
      };
    default:
      return state;
  }
}
