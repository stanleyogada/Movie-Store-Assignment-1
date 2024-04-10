import {
  CTAction,
  FeaturedListing,
  Footer,
  Header,
  ItemListing,
  ProductionHouse,
  Slider,
} from "../components";
import useHome from "../hooks/useHome";

const Home = () => {
  const { allMovies, allTvShows, allFeaturedMovies, allFeaturedTvShows } =
    useHome();

  return (
    <>
      <Header />
      <Slider />
      <FeaturedListing title="Featured Movies" listing={allFeaturedMovies} />
      <ProductionHouse />
      <ItemListing title="Movies" link="/movies" listing={allMovies} />
      <FeaturedListing title="Featured TVShows" listing={allFeaturedTvShows} />
      <Slider />
      <ItemListing title="TV Shows" link="/tvshows" listing={allTvShows} />
      <CTAction />
      <Footer />
    </>
  );
};

export default Home;
