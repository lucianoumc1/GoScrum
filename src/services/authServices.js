const apiUrl = import.meta.env.VITE_API_URL;
const AUTH_ENDPOINT = `${apiUrl}/auth`;

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
  const teamId = !values.teamId ? crypto.randomUUID() : values.teamId;
  const body = {
    userName: values.userName,
    password: values.password,
    user: {
      name: values.name,
      email: values.email,
      teamId,
      rol: values.rol,
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
  return data;
};
