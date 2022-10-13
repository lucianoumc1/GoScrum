const AUTH_ENDPOINT = "https://goscrum-api.alkemy.org/auth";

export const authLoginService = (userCredentials) => {
  const { userName, password } = userCredentials;
  return fetch(`${AUTH_ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  });
};

export const authRegisterService = (values) => {
  const teamID = !values.teamId ? crypto.randomUUID() : values.teamId;
  const body = {
    user: {
      userName: values.userName,
      password: values.password,
      email: values.email,
      teamID,
      role: values.rol,
      continent: values.continent,
      region: values.region,
    },
  };
  return fetch(`${AUTH_ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const fetchAuthData = async () => {
  const data = await (await fetch(`${AUTH_ENDPOINT}/data`)).json();
  return data.result;
};
