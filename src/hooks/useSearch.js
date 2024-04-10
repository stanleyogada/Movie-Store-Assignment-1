import { useForm } from "react-hook-form";
import useFetchData from "./useFetchData";
import { useEffect } from "react";
import { toast } from "react-toastify";
import movies from "../services/core/movies";

const useSearch = () => {
  const {
    register,
    getValues,
    handleSubmit: _handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data: results, handleFetchData: handleSearch } = useFetchData(() =>
    movies.searchMoviesByTitle(getValues("query"))
  );

  useEffect(() => {
    if (errors.query) {
      toast.error(errors.query.message);
    }
  }, [Object.keys(errors).length]);

  useEffect(() => {
    if (results.error) {
      toast.error(results.error);
    }
  }, [results.error]);

  const handleSubmit = () =>
    _handleSubmit(() => {
      console.log("Search query:", getValues("query"));
      handleSearch();
    });

  return {
    isSubmitting,
    register,
    handleSubmit,
    query: getValues("query"),
    results,
  };
};

export default useSearch;
