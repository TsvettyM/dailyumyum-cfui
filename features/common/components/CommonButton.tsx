import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  title: string | ReactNode;
  type?: "button" | "reset" | "submit";
  href?: string;
  style?: "border" | "green" | "black";
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
      case "black":
        return "text-black font-medium border border-black";
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
    </button>
  );
};

export default CommonButton;
