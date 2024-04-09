import { useParams } from "react-router-dom";
import { CTAction, Footer, Header, Slider } from "../components";
import { getSingleDetails } from "../utils/custonFetcth";
import { useEffect, useState } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const SingleDetails = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const getSingleDetail = async () => {
    try {
      const resp = await getSingleDetails(id);
      setDetail(resp.data);
    } catch (error) {
      console.error("Error fetching single movie details:", error);
    }
  };

  useEffect(() => {
    getSingleDetail();
  }, [id]);
  console.log(detail);
  return (
    <>
      <Header />
      {/* Huge Image */}
      <div className=" flex items-center  " style={{ borderRadius: "20px" }}>
        <img
          src={IMAGE_BASE_URL + detail?.backdrop_path}
          alt={"BackDrop Image"}
          className="min-w-full rounded-2xl md:h-[335px] object-cover
        object-left-top"
        />
      </div>
      {/* End Of Huge Image */}
      <div className=" px-7 lg:px-14 pb-4 flex items-center justify-between gap-5">
        {/* Small Image */}
        <img
          src={IMAGE_BASE_URL + detail?.poster_path}
          alt={"Poster Image"}
          className="w-full lg:w-[250px] lg:h-[370px] rounded-md hidden lg:flex mt-[-8%] ml-[8%]"
        />
        {/*End of Small Image */}
        <div className=" grid gap-4 text-white mt-10 md:mt-5">
          <h1 className=" font-semibold text-center lg:text-left ">
            {detail?.original_title}
          </h1>
          <p className=" font-medium text-base ">{detail?.overview}</p>
          <div className=" flex items-center gap-6 justify-center lg:justify-start">
            <button className=" text-sm md:text-lg text-[#131520] shadow-none border-none">
              Rent $18.99
            </button>
            <button className=" text-sm md:text-lg text-[#131520] shadow-none border-none">
              Purchase $35.99
            </button>
          </div>
        </div>
      </div>
      <CTAction />
      <Footer />
    </>
  );
};

export default SingleDetails;
