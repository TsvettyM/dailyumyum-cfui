import IconClose from "@/features/icons/components/IconClose";
import IconDropMenuArrow from "@/features/icons/components/IconDropMenuArrow";
import classNames from "classnames";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setSelectedData(item.split(",").map((i) => i.trim()));
  }, [item]);

  function handleOpen() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handleSelect(selectedItem: string) {
    let updatedData;
    if (selectedData.includes(selectedItem)) {
      updatedData = selectedData.filter(
        (existingItem) => existingItem !== selectedItem
      );
    } else {
      updatedData = [...selectedData, selectedItem];
    }
    setSelectedData(updatedData);
    setItem(updatedData.join(","));
  }

  function handleRemove(removedItem: string) {
    const updatedData = selectedData.filter(
      (existingItem) => existingItem !== removedItem
    );
    setSelectedData(updatedData);
    setItem(updatedData.join(","));
  }

  return (
    <div className="common__input-select group relative flex w-full flex-col">
      <CommonLabel htmlFor="" style="black" text={label} />

      <div
        className="relative flex items-center border text-black/40 space-x-2 border-black rounded-8 text-left w-full p-3 h-11 cursor-pointer mb-4"
        onClick={handleOpen}
      >
        {selectedData.length > 0
          ? selectedData.map((selectedItem) => (
              <span
                className="flex items-center justify-center text-left text-black bg-[#748D93]/20 py-1 px-2.5 rounded-8"
                key={selectedItem}
              >
                {selectedItem}
                <button
                  type="button"
                  onClick={() => handleRemove(selectedItem)}
                  className="common__btn--select relative text-center text-black font-bold text-18"
                >
                  <IconClose className="ml-2" />
                </button>
              </span>
            ))
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
          {data.map((dataItem, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelect(dataItem)}
              className={classNames(
                "text-left font-semibold p-2 hover:bg-black/15 duration-200  last-of-type:rounded-b-8 first-of-type:rounded-t-8",
                {
                  "bg-[#748D93]/20 border-b-2 border-[#748D93]":
                    selectedData.includes(dataItem),
                }
              )}
            >
              {dataItem}
            </button>
          ))}
        </div>
      ) : null}

      {error ? <CommonError error={error} /> : null}
    </div>
  );
};

export default CommonInputSelect;
