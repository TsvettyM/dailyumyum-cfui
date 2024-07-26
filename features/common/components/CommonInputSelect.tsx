import IconClose from "@/features/icons/components/IconClose";
import IconDropMenuArrow from "@/features/icons/components/IconDropMenuArrow";
import classNames from "classnames";
import { useState } from "react";
import CommonLabel from "./CommonLabel";
import CommonError from "./CommonError";

interface IProps {
  error?: string;
  data: string[];
  label?: string;
  setItem: (item: string) => void;
  item: string;
}

const CommonInputSelect = ({ data, setItem, item, error, label }: IProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  console.log(item);

  function handleOpen() {
    setIsOpenMenu(!isOpenMenu);
  }
  function handleSelect(item: string) {
    let updatedData;
    if (selectedData.includes(item)) {
      updatedData = selectedData.filter(
        (existingItem) => existingItem !== item
      );
    } else {
      updatedData = [...selectedData, item];
    }
    setSelectedData(updatedData);
    setItem(updatedData.join(","));
  }
  function handleRemove(item: string) {
    setSelectedData((prevState) => {
      return prevState.filter((existingItem) => existingItem !== item);
    });
  }

  return (
    <div className="common__input-select group relative flex w-full flex-col">
      <CommonLabel htmlFor="" style="black" text={label} />

      <div
        className="relative flex items-center border text-black/40 space-x-2 border-black rounded-8 text-left w-full p-3 h-11 cursor-pointer mb-4"
        onClick={handleOpen}
      >
        {selectedData.length > 0
          ? selectedData.map((item) => {
              return (
                <span
                  className="flex items-center justify-center text-left text-black bg-[#748D93]/20 py-1 px-2.5 rounded-8"
                  key={item}
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemove(item)}
                    className="common__btn--select relative text-center text-black font-bold text-18"
                  >
                    <IconClose className="ml-2" />
                  </button>
                </span>
              );
            })
          : "Choose a category"}

        {selectedData.length > 0 ? (
          <button type="button" onClick={() => setSelectedData([])}></button>
        ) : null}

        <IconDropMenuArrow
          className={classNames("absolute right-3 duration-200", {
            "rotate-180": isOpenMenu,
          })}
        />
      </div>

      {isOpenMenu ? (
        <div className="absolute flex flex-col bg-[#DCECEA] top-20 right-0 z-20 border border-black rounded-8 w-full">
          {data.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => handleSelect(item)}
                className={classNames(
                  "text-left font-semibold p-2 hover:bg-black/15 duration-200  last-of-type:rounded-b-8 first-of-type:rounded-t-8",
                  {
                    "bg-[#748D93]/20 border-b-2 border-[#748D93]":
                      selectedData.includes(item),
                  }
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}

      {error ? <CommonError error={error} /> : null}
    </div>
  );
};

export default CommonInputSelect;
