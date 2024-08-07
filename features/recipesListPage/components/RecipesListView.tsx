import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipesList from "./RecipesList";
import { useRouter } from "next/router";

const RecipesListView = () => {
  const [recipes, setRecipes] = useState<IRecipeList[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        setError("There was an error fetching the recipes.");
      });
  }, []);

  const groupByCategory = () => {
    const grouped: { [key: string]: IRecipeList[] } = {};

    recipes.forEach((recipe) => {
      if (!grouped[recipe.category]) {
        grouped[recipe.category] = [];
      }
      grouped[recipe.category].push(recipe);
    });

    return Object.entries(grouped).map(([category, recipes]) => ({
      category,
      recipes,
    }));
  };

  const filteredGroupedRecipes = () => {
    const { category } = router.query;
    if (category && category !== "All") {
      return groupByCategory().filter((group) => group.category === category);
    }
    return groupByCategory();
  };

  return (
    <section className="recipes__list-view py-5 h-full">
      <div className="container flex flex-col items-center md:items-start justify-center md:justify-start">
        {error && <p className="text-red">{error}</p>}

        {filteredGroupedRecipes().map((group) => (
          <ul key={group.category}>
            <h2 className="text-24 md:text-28 text-center sm:text-start text-gray-500 font-bold mb-10">
              {group.category} ({group.recipes.length})
            </h2>

            <RecipesList recipes={group.recipes} />
          </ul>
        ))}
      </div>
    </section>
  );
};

export default RecipesListView;
