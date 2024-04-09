import { useEffect } from "react";
import movies from "../services/core/movies";
import useFetchData from "./useFetchData";
import { toast } from "react-toastify";

const useTvShows = () => {
  const { data: allTvShows, handleFetchData: handleFetchAllTvShows } =
    useFetchData(() => movies.getAllTvShows(true));

  useEffect(() => {
    handleFetchAllTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle all errors
  useEffect(() => {
    if (allTvShows.error) {
      toast.error(allTvShows.error);
    }
  }, [allTvShows.error]);

  return {
    allTvShows,
  };
};

export default useTvShows;
