import getServiceCorePath from "../../utils/getServiceCorePath";
import http from "../../utils/http";

const register = async (email, password, firstName, lastName) => {
  await http.post(getServiceCorePath("/users", "/api/v1/auth/register"), {
    email,
    password,
    firstName,
    lastName,
  });

  return true;
};

const login = async (email, password) => {
  const response = await http.post(
    getServiceCorePath("/users", "/api/v1/auth/login"),
    {
      email,
      password,
    }
  );

  return response.data;
};

export default { register, login };
