import { useForm } from "react-hook-form";
import auth from "../services/core/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: _handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const errorKey = Object.keys(errors)[0];

    if (errorKey) {
      toast.error(errors[errorKey].message); // TODO: Toast this message
    }
  }, [Object.keys(errors).length]);

  const handleSubmit = () =>
    _handleSubmit(async (data) => {
      try {
        await auth.register(
          data.email,
          data.password,
          data.firstName,
          data.lastName
        );

        navigate("/login");
      } catch (error) {
        const message = error?.response.data.message || error.message;

        toast.error(message); // TODO: Toast this message
      }
    });

  return { register, handleSubmit, isSubmitting };
};

export default useRegister;
