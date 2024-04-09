import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_CORE_BACKEND_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
