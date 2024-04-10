import { ItemsCard, Header, Slider, Footer, CTAction } from "../components";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { allMovies } = useMovies();

  return (
    <>
      <Header />
      <Slider />
      <ItemsCard listing={allMovies} title="Movies" />
      <CTAction />
      <Footer />
    </>
  );
};

export default Movies;
