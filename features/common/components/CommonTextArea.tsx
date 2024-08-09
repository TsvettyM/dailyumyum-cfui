import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import classNames from "classnames";
import CommonLabel from "./CommonLabel";
import CommonError from "./CommonError";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error: string;
  label?: string;
  styleMode: "white" | "black";
  className?: string;
}

const CommonTextArea = (props: IProps) => {
  const { label, error, styleMode, className, ...rest } = props;

  const getStyle = () => {
    switch (styleMode) {
      case "white":
        return "text-white border-white";
      case "black":
        return "border-black text-black";
    }
  };

  return (
    <div
      className={classNames("common__textarea flex flex-col group relative", {
        [className || ""]: className,
      })}
    >
      <CommonLabel
        style={styleMode}
        htmlFor={rest.id}
        text={label}
        required={rest.required}
      />

      <textarea
        className={classNames(
          "common__textarea resize-none font-medium border rounded-8 p-2 bg-transparent outline-none",
          {
            [getStyle()]: getStyle,
          }
        )}
        {...rest}
        required={false}
      />

      {error ? <CommonError error={error} /> : null}
    </div>
  );
};

export default CommonTextArea;
