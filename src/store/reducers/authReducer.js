/* eslint-disable default-param-last */
const initialState = {
  isLogued: false,
  token: "",
  currentUser: {
    userName: "",
    email: "",
    rol: "",
    continent: "",
    region: "",
    teamId: "",
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
          rol: payload.user.rol,
          continent: payload.user.continent,
          region: payload.user.region,
          teamId: payload.user.teamId,
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
          rol: "",
          continent: "",
          region: "",
          teamId: "",
        },
      };
    }
    default:
      return state;
  }
};
