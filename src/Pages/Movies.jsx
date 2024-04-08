import { useEffect, useState } from "react";
import { ItemsCard, Header, Slider, Footer } from "../components";
import { getTrendingVideos } from "../utils/custonFetcth";

const Movies = () => {
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
      <ItemsCard listing={listing} title="Movies" />
      <Footer />
    </>
  );
};

export default Movies;
