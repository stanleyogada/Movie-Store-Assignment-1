import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  return (
    <button
      type="submit"
      className=" bg-[#BE123C] text-white p-3 w-full font-bold text-xl "
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
