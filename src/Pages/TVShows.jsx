import { CTAction, Footer, Header, ItemsCard, Slider } from "../components";
import useTvShows from "../hooks/useTvShows";

const TVShows = () => {
  const { allTvShows } = useTvShows();

  return (
    <>
      <Header />
      <Slider />
      <ItemsCard listing={allTvShows} title="TV Shows" />
      <CTAction />
      <Footer />
    </>
  );
};

export default TVShows;
