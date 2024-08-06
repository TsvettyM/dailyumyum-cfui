import IconLiked from "@/features/icons/components/IconLiked";
import IconShare from "@/features/icons/components/IconShare";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { IRecipeList } from "@/pages/admin/recipes";

interface IProps {
  recipe: IRecipeList;
  size: "big" | "small";
}

const CommonCard = ({ recipe, size }: IProps) => {
  const maxTitleLength = 20;
  const truncatedTitle =
    recipe.title.length > maxTitleLength
      ? `${recipe.title.substring(0, maxTitleLength)}...`
      : recipe.title;
  const maxDescriptionLength = 60;
  const truncatedDescription =
    recipe.description.length > maxDescriptionLength
      ? `${recipe.description.substring(0, maxDescriptionLength)}...`
      : recipe.description;

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className={classNames(
        "common__card w-full relative flex flex-col items-center justify-center rounded-10 text-center shadow-bottom duration-200 hover:-translate-y-2",
        {
          "px-6": size === "big",
          "px-3 pb-3": size === "small",
          "!h-[225px] !w-[200px]": size === "small",
        }
      )}
    >
      <div
        className={classNames("image__card relative flex flex-col", {
          "h-[180px] w-[210px]": size === "big",
          "h-[100px] w-[120px]": size === "small",
          "-top-10 -mb-5": size === "big",
          "-top-2.5 mb-auto": size === "small",
        })}
      >
        <Image src="/images/intro-img.png" alt="" fill draggable={false} />
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
        className={classNames(
          "flex font-bold text-green text-center max-w-[120px]",
          {
            "text-28": size === "big",
            "text-18": size === "small",
          }
        )}
      >
        {truncatedTitle}
      </h4>

      <hr
        className={classNames("w-full rounded-10 text-[#AFACAC]", {
          "mt-10 mb-5": size === "big",
          "mt-2 mb-2": size === "small",
        })}
      />

      <p
        className={classNames("flex font-medium text-black", {
          "text-16": size === "big",
          "text-12": size === "small",
          "max-w-[270px]": size === "big",
          "max-w-[200px]": size === "small",
        })}
      >
        {truncatedDescription}
      </p>

      {/* <div
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
      </div> */}
    </Link>
  );
};

export default CommonCard;
