import { Link } from "react-router-dom";

const HeaderItems = ({ name, Icon, link }) => {
  return (
    <Link
      to={link}
      className=" text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 hover:duration-300 mb-3"
    >
      <Icon />
      <h2 className=" ">{name}</h2>
    </Link>
  );
};

export default HeaderItems;
