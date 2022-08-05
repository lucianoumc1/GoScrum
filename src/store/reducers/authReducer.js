/* eslint-disable default-param-last */
const initialState = {
  isLogued: false,
  token: "",
  currentUser: {
    userName: "",
    email: "",
    role: "",
    continent: "",
    region: "",
    teamID: "",
  },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "auth/login": {
      return {
        ...state,
        isLogued: true,
        token: payload.token,
        currentUser: {
          userName: payload.user.userName,
          email: payload.user.email,
          role: payload.user.role,
          continent: payload.user.continent,
          region: payload.user.region,
          teamID: payload.user.teamID,
        },
      };
    }
    case "auth/logout": {
      return {
        ...state,
        isLogued: false,
        token: "",
        currentUser: {
          userName: "",
          email: "",
          role: "",
          continent: "",
          region: "",
          teamID: "",
        },
      };
    }
    default:
      return state;
  }
};
