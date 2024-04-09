import { CgSpinner } from "react-icons/cg";

const SubmitBtn = ({ text, disabled }) => {
  return (
    <button
      type="submit"
      className=" bg-[#BE123C] text-white p-3 w-full font-bold text-xl flex justify-center items-center rounded-md"
      disabled={disabled}
    >
      {text}
      {disabled && (
        <span className=" ml-2">
          <CgSpinner size={20} />
        </span>
      )}
    </button>
  );
};

export default SubmitBtn;
