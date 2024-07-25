import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import CommonLabel from "./CommonLabel";
import CommonError from "./CommonError";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  styleMode: "white" | "black";
  className?: string;
}

const CommonInput = (props: IProps) => {
  const { label, error, styleMode, className, ...rest } = props;

  const getStyle = () => {
    switch (styleMode) {
      case "white":
        return "text-white";
      case "black":
        return "text-black";
    }
  };

  return (
    <div
      className={classNames(
        "common__input group relative flex w-full flex-col",
        {
          [className || ""]: className,
        }
      )}
    >
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
          }
        )}
        {...rest}
        required={false}
      />

      {error ? <CommonError error={error} /> : null}
    </div>
  );
};

export default CommonInput;
