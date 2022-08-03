const AUTH_DATA_ENDPOINT = "https://goscrum-api.alkemy.org/auth/data";

const fetchAuthData = async () => {
  const data = await (await fetch(AUTH_DATA_ENDPOINT)).json();
  return data.result;
};
export default fetchAuthData;
