import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import classNames from "classnames";
import CommonLabel from "./CommonLabel";
import CommonError from "./CommonError";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  hookRegister?: UseFormRegisterReturn;
  fieldError?: FieldError | undefined;
  label?: string;
  styleMode: "white" | "black";
  className?: string;
}

const CommonInput = (props: IProps) => {
  const { label, hookRegister, fieldError, styleMode, className, ...rest } =
    props;

  const getStyle = () => {
    switch (styleMode) {
      case "white":
        return "text-white";
      case "black":
        return "text-black";
    }
  };

  return (
    <div className="common__input group relative flex w-full flex-col">
      <CommonLabel
        style={styleMode}
        htmlFor={rest.id}
        text={label}
        required={rest.required}
      />

      <input
        className={classNames(
          "w-full resize-none rounded-8 border bg-transparent p-2 font-medium outline-none",
          {
            [getStyle()]: getStyle,
            [className || ""]: className,
          }
        )}
        {...hookRegister}
        {...rest}
        required={false}
      />

      {fieldError?.message ? <CommonError fieldError={fieldError} /> : null}
    </div>
  );
};

export default CommonInput;
