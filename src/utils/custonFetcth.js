import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";
const backendRootUrl =
  "https://digital-video-store-latest.onrender.com/api/v1/movies";

// "https://api.themoviedb.org/3/movie/343611?api_key=35d53b06ecff5627945333051bd3ec2d";

export const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export const getSingleDetails = (id) => {
  return axios.get(`${movieBaseUrl}/movie/${id}?api_key=${api_key}`);
};
