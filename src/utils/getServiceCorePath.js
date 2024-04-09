const getServiceCorePath = (devPath, prodPath) => {
  if (
    import.meta.env.VITE_NODE_ENV === "development" ||
    import.meta.env.VITE_CORE_BACKEND_BASEURL?.includes("localhost")
  ) {
    return devPath;
  }

  return prodPath;
};

export default getServiceCorePath;
