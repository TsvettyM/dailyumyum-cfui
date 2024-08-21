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
  required?: boolean;
  setItem: (item: string) => void;
  item: string;
  className?: string;
}

const CommonInputSelect = ({
  data,
  setItem,
  item,
  error,
  required,
  label,
  className,
}: IProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedData, setSelectedData] = useState<string[]>([]);

  useEffect(() => {
    if (item.trim().length === 0) {
      setSelectedData([]);
      return;
    }
    setSelectedData(
      item
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    );
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
    setIsOpenMenu(false);
  }

  function handleRemove(removedItem: string) {
    const updatedData = selectedData.filter(
      (existingItem) => existingItem !== removedItem
    );
    setSelectedData(updatedData);
    setItem(updatedData.join(","));
  }

  return (
    <div
      className={classNames(
        "common__input-select group relative flex w-full flex-col",
        { [className || ""]: className }
      )}
    >
      <CommonLabel htmlFor="" style="black" text={label} required={required} />

      <div className="relative flex items-center border text-black/40 border-black rounded-8 text-left w-full p-3 h-11 cursor-pointer">
        <button
          type="button"
          className="absolute left-0 top-0 w-full h-full"
          onClick={handleOpen}
        />
        {selectedData.length > 0 ? (
          <>
            {selectedData.slice(0, 2).map((selectedItem) => (
              <span
                className="flex items-center mr-2 last-of-type:mr-0 justify-center text-left text-black bg-[#748D93]/20 py-1 px-2.5 rounded-8"
                key={selectedItem}
              >
                {selectedItem}
                <button
                  type="button"
                  onClick={() => handleRemove(selectedItem)}
                  className="common__select--btn relative text-center text-black font-bold text-18"
                >
                  <IconClose className="ml-2" />
                </button>
              </span>
            ))}

            {selectedData.length > 2 ? (
              <button
                type="button"
                className="common__select--btn relative text-center text-black font-bold text-18 ml-3"
              >
                + {selectedData.length - 2}
              </button>
            ) : null}
          </>
        ) : (
          "Choose a category"
        )}

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
