import { useEffect, useState } from "react";
import {
  CTAction,
  FeaturedListing,
  Footer,
  Header,
  ItemListing,
  ProductionHouse,
  Slider,
} from "../components";
import { getTrendingVideos } from "../utils/custonFetcth";
const Home = () => {
  const [listing, setListing] = useState([]);
  const getSliderData = async () => {
    getTrendingVideos.then((resp) => {
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
      <FeaturedListing listing={listing} title="Featured Movies" />
      <ItemListing listing={listing} title="Movies" link="/movies" />
      <ProductionHouse />
      <FeaturedListing listing={listing} title="Featured TVShows" />
      <ItemListing listing={listing} title="TV Shows" link="/tvshows" />
      <CTAction />
      <Footer />
    </>
  );
};

export default Home;
