import classNames from "classnames";
import Link from "next/link";

interface IProps {
  title: string;
  type?: "button" | "reset" | "submit";
  href?: string;
  style?: "border" | "green";
  className?: string;
  onClick?: () => void;
}

const CommonButton = (props: IProps) => {
  const { title, href, type, style, className, onClick } = props;

  const getStyle = () => {
    switch (style) {
      case "border":
        return "text-green font-bold border border-green";
      case "green":
        return "text-white bg-green";
      default:
        return "";
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        className={classNames(
          "common__button flex items-center justify-center w-full h-9 rounded-full text-center font-bold",
          {
            [getStyle()]: getStyle,
            [className || ""]: className,
          }
        )}
      >
        {title}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "common__button flex items-center justify-center w-full h-9 rounded-full text-center font-bold",
        {
          [getStyle()]: getStyle,
          [className || ""]: className,
        }
      )}
    >
      {title}
      {style}
    </button>
  );
};

export default CommonButton;
