import IconDropMenuArrow from "@/features/icons/components/IconDropMenuArrow";
import classNames from "classnames";
import { ReactNode, useState } from "react";

interface IProps {
  title: ReactNode;
  items: string[];
  className?: string;
}

const CommonDropdownButton = ({ title, items, className }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames("common-dropDown-button relative", {
        [className ?? ""]: className,
      })}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-transparent text-black border-black border px-4 py-2 h-9 md:h-10 rounded-full"
      >
        {title}
        <IconDropMenuArrow
          className={classNames("ml-10 duration-200", {
            "rotate-180": isOpen,
          })}
        />
      </button>
      {isOpen && (
        <div className="absolute flex flex-col right-0 mt-1 w-full bg-white border border-black rounded-10 shadow-bottom shadow-black/40">
          {items.map((item, index) => (
            <button
              type="button"
              key={index}
              className="text-left p-2 hover:text-gray"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonDropdownButton;
