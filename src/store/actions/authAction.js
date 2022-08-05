export const authLogin = (user) => ({
  type: "auth/login",
  payload: user,
});
export const authLogout = () => ({
  type: "auth/logout",
});
