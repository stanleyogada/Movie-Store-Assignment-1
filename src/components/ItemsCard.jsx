import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const ItemsCard = ({ listing, title }) => {
  return (
    <>
      <div className=" p-2 px-6 md:px-12 ">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold my-3 text-white">
          {title}
        </h2>
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {listing?.map((item, index) => {
            return (
              <>
                <div key={index} className="relative">
                  <img
                    src={IMAGE_BASE_URL + item.poster_path}
                    className="rounded-lg hover:rounded-lg hover:border-[3px] border-gray-400 cursor-pointer "
                    alt={item.title || item.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black  text-white text-center py-3">
                    {item.title || item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemsCard;
