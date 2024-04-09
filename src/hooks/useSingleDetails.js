import { useEffect } from "react";
import movies from "../services/core/movies";
import useFetchData from "./useFetchData";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useSingleDetails = () => {
  const { id } = useParams();
  const { data: singleMovie, handleFetchData: handleFetchSingleMovie } =
    useFetchData(() => movies.getMovieById(id));

  useEffect(() => {
    handleFetchSingleMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (singleMovie.error) {
      toast.error(singleMovie.error);
    }
  }, [singleMovie.error]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    singleMovie,
  };
};

export default useSingleDetails;
