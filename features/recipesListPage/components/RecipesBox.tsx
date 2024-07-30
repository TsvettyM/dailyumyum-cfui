import CommonCard from "@/features/common/components/CommonCard";
import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
}

const RecipesBox = ({ title }: IProps) => {
  const [recipes, setRecipes] = useState<IRecipeList[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        setError("There was an error fetching the recipes.");
        console.log(err);
      });
  }, []);

  const categorizedRecipes = recipes.filter(
    (recipe) => recipe.category === title
  );

  return (
    <div className="recipes__box flex flex-col items-start justify-center">
      <h2 className="text-28 text-gray-500 font-bold mb-10">
        {title} ({categorizedRecipes.length})
      </h2>

      {error && <p className="text-red">{error}</p>}

      <div className="grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-10">
        {categorizedRecipes.map((recipe, index) => (
          <CommonCard size="small" key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesBox;
