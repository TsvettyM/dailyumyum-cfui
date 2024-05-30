import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import classNames from "classnames";
import CommonLabel from "./CommonLabel";
import CommonError from "./CommonError";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  hookRegister: UseFormRegisterReturn;
  fieldError: FieldError | undefined;
  label?: string;
  styleMode: "white" | "black";
  className?: string;
}

const CommonTextArea = (props: IProps) => {
  const { label, hookRegister, fieldError, styleMode, className, ...rest } =
    props;

  const getStyle = () => {
    switch (styleMode) {
      case "white":
        return "text-white border-white";
      case "black":
        return "border-black text-black";
    }
  };

  return (
    <div className="common__input flex flex-col group relative">
      <CommonLabel
        style={styleMode}
        htmlFor={rest.id}
        text={label}
        required={rest.required}
      />

      <textarea
        className={classNames(
          "resize-none font-medium border rounded-8 p-2 bg-transparent outline-none",
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

export default CommonTextArea;
