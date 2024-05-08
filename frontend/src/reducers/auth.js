import { AUTH, LOGOUT } from "../constants";

const authReducer = (state = { profile: {}, accessToken: "" }, action) => {
  switch (action.type) {
    case AUTH:
      const user = {
        ...state,
        profile: action.payload.data,
        accessToken: action.payload.accessToken,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    case LOGOUT:
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

export default authReducer;
