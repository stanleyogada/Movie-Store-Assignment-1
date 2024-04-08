import { useEffect, useState } from "react";
import { getTrendingVideos } from "../utils/custonFetcth";
import { Footer, Header, ItemsCard, Slider } from "../components";

const TVShows = () => {
  const [listing, setListing] = useState([]);
  const getSliderData = async () => {
    getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setListing(resp.data.results);
    });
  };
  useEffect(() => {
    getSliderData();
  }, []);
  return (
    <>
      <Header />
      <Slider />
      <ItemsCard listing={listing} title="TV Shows" />
      <Footer />
    </>
  );
};

export default TVShows;
