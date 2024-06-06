import IconArrow from "@/features/icons/components/IconArrow";
import Link from "next/link";
import CommonCarousel from "@/features/common/components/carousel/CommonCarousel";
import IRecipe from "../interfaces/recipe.interface";
import { useEffect, useState } from "react";
import axios from "axios";
import CommonCard from "../../common/components/CommonCard";

const HomepagePopularRecipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    axios
      .get("https://dailyumyum.vercel.app//api/popular-recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  return (
    <div className="homepage__popular--recipes flex flex-col py-20 w-full mb-20">
      <div className="container flex justify-between items-center mb-14">
        <h1 className="text-24 font-bold text-green">
          OUR MOST POPULAR RECIPES
        </h1>

        <Link href="/" className="flex items-center font-medium text-[#AFACAC]">
          View All
          <IconArrow className="ml-2" />
        </Link>
      </div>

      <div className="recipes__list mt-20 w-full max-w-[1200px] mx-auto px-5">
        <CommonCarousel itemsToShow={3} hasDots hasButtons>
          {recipes.map((recipe, index) => (
            <CommonCard size="big" key={index} recipe={recipe} />
          ))}
        </CommonCarousel>
      </div>
    </div>
  );
};

export default HomepagePopularRecipes;
