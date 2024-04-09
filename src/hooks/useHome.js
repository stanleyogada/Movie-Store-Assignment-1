import { useEffect } from "react";
import movies from "../services/core/movies";
import useFetchData from "./useFetchData";
import { toast } from "react-toastify";

const useHome = () => {
  const { data: allMovies, handleFetchData: handleFetchAllMovies } =
    useFetchData(movies.getAllMovies);
  const { data: allTvShows, handleFetchData: handleFetchAllTvShows } =
    useFetchData(movies.getAllTvShows);
  const {
    data: allFeaturedMovies,
    handleFetchData: handleFetchAllFeaturedMovies,
  } = useFetchData(movies.getAllFeaturedMovies);
  const {
    data: allFeaturedTvShows,
    handleFetchData: handleFetchAllFeaturedTvShows,
  } = useFetchData(movies.getAllFeaturedTvShows);

  useEffect(() => {
    handleFetchAllMovies();
    handleFetchAllTvShows();
    handleFetchAllFeaturedMovies();
    handleFetchAllFeaturedTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle all errors
  useEffect(() => {
    if (allMovies.error) {
      toast.error(allMovies.error);
    }

    if (allTvShows.error) {
      toast.error(allTvShows.error);
    }

    if (allFeaturedMovies.error) {
      toast.error(allFeaturedMovies.error);
    }

    if (allFeaturedTvShows.error) {
      toast.error(allFeaturedTvShows.error);
    }
  }, [
    allMovies.error,
    allTvShows.error,
    allFeaturedMovies.error,
    allFeaturedTvShows.error,
  ]);

  return {
    allMovies,
    allTvShows,
    allFeaturedMovies,
    allFeaturedTvShows,
  };
};

export default useHome;
