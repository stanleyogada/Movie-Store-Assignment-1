import { useState } from "react";

const useFetchData = (service) => {
  const [data, setData] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const handleFetchData = async () => {
    try {
      setData({ data: null, error: null, isLoading: true });
      const resData = await service();
      setData({ data: resData, error: null, isLoading: false });
    } catch (error) {
      const message = error?.response?.data?.message || error.message;

      setData({ data: null, error: message, isLoading: false });
    }
  };

  return { data, handleFetchData };
};

export default useFetchData;
