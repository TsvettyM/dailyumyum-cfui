import IconLiked from "@/features/icons/components/IconLiked";
import IconRating from "@/features/icons/components/IconRating";
import IconShare from "@/features/icons/components/IconShare";
import IconTime from "@/features/icons/components/IconTime";
import IconYums from "@/features/icons/components/IconYums";
import Image from "next/image";
import IRecipe from "../../homepage/interfaces/recipe.interface";
import classNames from "classnames";
import Link from "next/link";

interface IProps {
  recipe: IRecipe;
  size: "big" | "small";
}

const CommonCard = ({ recipe, size }: IProps) => {
  return (
    <Link
      href="/"
      className={classNames(
        "common__card w-full relative flex flex-col items-center justify-center rounded-10 text-center shadow-bottom",
        {
          "px-6": size === "big",
          "px-3": size === "small",
        }
      )}
    >
      <div
        className={classNames("relative", {
          "h-[180px] w-[210px]": size === "big",
          "h-[100px] w-[120px]": size === "small",
          "-top-7": size === "big",
          "-top-4": size === "small",
          "-mb-5": size === "big",
          "-mb-2": size === "small",
        })}
      >
        <Image src={recipe.image} alt="" fill draggable={false} />
      </div>
      <button type="button" className="absolute left-4 top-3">
        <IconLiked
          className={classNames({
            "w-[25px] h-[22px]": size === "big",
            "w-4 h-3.5": size === "small",
          })}
        />
      </button>
      <button type="button" className="absolute right-4 top-3">
        <IconShare
          className={classNames({
            "w-[25px] h-[22px]": size === "big",
            "w-4 h-3.5": size === "small",
          })}
        />
      </button>
      <h4
        className={classNames("flex font-bold text-green", {
          "text-32": size === "big",
          "text-20": size === "small",
        })}
      >
        {recipe.title}
      </h4>
      <p
        className={classNames("flex font-medium text-black", {
          "text-16": size === "big",
          "text-12": size === "small",
          "mt-5": size === "big",
          "mt-2": size === "small",
          "max-w-[270px]": size === "big",
          "max-w-[200px]": size === "small",
        })}
      >
        {recipe.description}
      </p>
      <hr
        className={classNames("w-full rounded-10 text-[#AFACAC]", {
          "mt-10": size === "big",
          "mt-4": size === "small",
        })}
      />
      <div
        className={classNames("flex items-center w-full justify-between", {
          "my-5": size === "big",
          "my-3": size === "small",
        })}
      >
        <p
          className={classNames("flex flex-col items-center justify-center", {
            "text-16": size === "big",
            "text-12": size === "small",
          })}
        >
          <IconTime
            className={classNames({
              "w-[23px] h-[22px]": size === "big",
              "w-[15px] h-3.5": size === "small",
            })}
          />
          {recipe.time} min
        </p>

        <p
          className={classNames("flex flex-col items-center justify-center", {
            "text-16": size === "big",
            "text-12": size === "small",
          })}
        >
          <IconYums
            className={classNames({
              "w-14 h-[23px]": size === "big",
              "w-9 h-[15px]": size === "small",
            })}
          />
          {recipe.yums}
        </p>

        <p
          className={classNames("flex flex-col items-center justify-center", {
            "text-16": size === "big",
            "text-12": size === "small",
          })}
        >
          <IconRating
            className={classNames({
              "w-[23px] h-[22px]": size === "big",
              "w-3.5 h-3.5": size === "small",
            })}
          />
          {recipe.rating}
        </p>
      </div>
    </Link>
  );
};

export default CommonCard;
