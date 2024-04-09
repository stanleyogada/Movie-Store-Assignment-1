import { useForm } from "react-hook-form";
import auth from "../services/core/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserLocalDB from "../utils/UserLocalDB";

const useLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: _handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const errorKey = Object.keys(errors)[0];

    if (errorKey) {
      console.log(errors[errorKey].message); // TODO: Toast this message
    }
  }, [Object.keys(errors).length]);

  const handleSubmit = () =>
    _handleSubmit(async (data) => {
      try {
        const resData = await auth.login(data.email, data.password);

        UserLocalDB.saveUser(resData);

        navigate("/me");
      } catch (error) {
        const message = error?.response.data.message || error.message;

        console.log(message); // TODO: Toast this message
      }
    });

  return { register, handleSubmit, isSubmitting };
};

export default useLogin;
