import classNames from "classnames";

interface IProps {
  htmlFor: string | undefined;
  text: string | undefined;
  required?: boolean;
  style: "white" | "black";
  className?: string;
}

const CommonLabel = ({ htmlFor, text, required, style, className }: IProps) => {
  if (!text) {
    return null;
  }

  const getStyle = () => {
    switch (style) {
      case "white":
        return "text-white";
      case "black":
        return "text-black";
    }
  };

  return (
    <label
      className={classNames("common__label my-1 text-16 font-bold", {
        [getStyle()]: getStyle,
        [className || ""]: className,
      })}
      htmlFor={htmlFor}
    >
      {text} {required ? "*" : null}
    </label>
  );
};

export default CommonLabel;
