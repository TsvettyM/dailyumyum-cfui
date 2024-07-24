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
      className={classNames("my-1 text-14 font-medium", {
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
