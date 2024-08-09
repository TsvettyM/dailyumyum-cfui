import CommonButton from "@/features/common/components/CommonButton";
import IconBG from "@/features/icons/components/IconBG";
import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IHomepageRecipe {
  className?: string;
  isLatest?: boolean;
}

const HomepageRecipe = ({ className, isLatest = true }: IHomepageRecipe) => {
  const [recipe, setRecipe] = useState<IRecipeList | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((res) => {
        const recipes = res.data;
        if (isLatest) {
          setRecipe(recipes[recipes.length - 1]);
        } else {
          setRecipe(recipes[recipes.length - 2]);
        }
      })
      .catch((err) => {
        setError("There was an error fetching the recipe.");
        console.log(err);
      });
  }, [isLatest]);

  return (
    <div
      className={classNames(
        "homepage__recipe-card relative max-w-max mr-0 lg:mr-20 flex flex-col items-center justify-center w-full",
        {
          [className || ""]: className,
        }
      )}
    >
      <IconBG className="absolute -right-[152px] md:-right-[100px] lg:-right-[158px] -top-10 md:-top-14 w-[480px] md:w-[510px] lg:w-[540px]" />
      <div className="recipe__title mr-0 md:mr-16 lg:mr-0">
        <p className="text-center text-28 font-bold text-green mb-2 line-clamp-1 max-w-[250px]">
          {recipe?.title || "Loading..."}
        </p>

        <div className="recipe__image relative mb-8 mt-4 h-[160px] w-[180px] md:h-[170px] md:w-[200px] lg:h-[190px] lg:w-[220px]">
          <Image
            src="/images/recipe-card-img.png"
            alt=""
            fill
            draggable={false}
          />
        </div>

        <CommonButton
          type="button"
          href={`/recipe/${recipe?.id || "#"}`}
          style="border"
          title="Get this recipe"
          className="!w-[155px] sm:!w-[160px] md:!w-[193px] bg-white relative z-20"
        />
      </div>
    </div>
  );
};

export default HomepageRecipe;
