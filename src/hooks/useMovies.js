import { useEffect } from "react";
import movies from "../services/core/movies";
import useFetchData from "./useFetchData";
import { toast } from "react-toastify";

const useMovies = () => {
  const { data: allMovies, handleFetchData: handleFetchAllMovies } =
    useFetchData(() => movies.getAllMovies(true));

  useEffect(() => {
    handleFetchAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle all errors
  useEffect(() => {
    if (allMovies.error) {
      toast.error(allMovies.error);
    }
  }, [allMovies.error]);

  return {
    allMovies,
  };
};

export default useMovies;
