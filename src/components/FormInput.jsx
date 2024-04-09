import { forwardRef } from "react";

const FormInput = forwardRef(({ label, size, ...rest }, ref) => {
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text text-white">{label}</span>
        </div>
        <input
          ref={ref}
          className={`${size} input input-bordered w-full rounded-md p-4`}
          {...rest}
        />
      </label>
    </>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
