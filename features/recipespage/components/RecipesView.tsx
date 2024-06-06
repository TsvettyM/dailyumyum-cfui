import CommonCard from "@/features/common/components/CommonCard";
import IRecipe from "@/features/homepage/interfaces/recipe.interface";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipesView = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    axios
      .get("https://dailyumyum.vercel.app/api/popular-recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  return (
    <section className="recipes__view py-10">
      <div className="container">
        <h2 className="text-28 text-gray-500 font-bold mb-10">
          Asian ({recipes.length})
        </h2>
        <div className="asian__food--list grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-20">
          {recipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div>

        {/* <h2 className="text-28 text-gray-500 font-bold mb-10">Mexican (5)</h2>
        <div className="mexican__food--list grid grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default RecipesView;
