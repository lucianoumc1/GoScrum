const LOGIN_ENDPOINT = "https://goscrum-api.alkemy.org/auth/login";

export const authLoginService = (userCredentials) => {
  const { userName, password } = userCredentials;
  return fetch(LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  });
};
