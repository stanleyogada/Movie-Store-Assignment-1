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
  let { data } = await http.post(
    getServiceCorePath("/users", "/api/v1/auth/login"),
    {
      email,
      password,
    }
  );

  if (!data.data) {
    data.data = {
      id: data.id,
      email: data.email,
      firstName: "FirstName",
      lastName: "LastName",
    };
  }

  return {
    id: data.data.id,
    email: data.data.email,
    firstName: data.data.firstName,
    lastName: data.data.lastName,
  };
};

export default { register, login };
