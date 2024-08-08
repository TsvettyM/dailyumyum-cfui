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
      const categories = recipe.category
        .split(",")
        .map((category) => category.trim());

      categories.forEach((category) => {
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(recipe);
      });
    });

    return Object.entries(grouped).map(([category, recipes]) => ({
      category,
      recipes,
    }));
  };

  const filteredGroupedRecipes = () => {
    const groupedRecipes = groupByCategory();

    if (router.query.category && router.query.category !== "All") {
      const filteredGroups = groupedRecipes.filter(
        (group) => group.category === router.query.category
      );

      if (filteredGroups.length === 0) {
        return [{ category: router.query.category as string, recipes: [] }];
      }

      return filteredGroups;
    }

    return groupedRecipes;
  };

  return (
    <section className="recipes__list-view py-5 h-full">
      <div className="container flex flex-col items-center md:items-start justify-center md:justify-start">
        {error && <p className="text-red">{error}</p>}

        {filteredGroupedRecipes()
          .sort((a, b) => a.category.localeCompare(b.category))
          .map((group) => (
            <ul key={group.category} className="w-full">
              <h2 className="text-24 md:text-28 text-center sm:text-start text-gray-500 font-bold mb-10">
                {group.category || router.query.category} (
                {group.recipes.length})
              </h2>
              {group.recipes.length > 0 ? (
                <RecipesList recipes={group.recipes} />
              ) : (
                <p className="opacity-70">No recipes yet {":("}</p>
              )}
            </ul>
          ))}
      </div>
    </section>
  );
};

export default RecipesListView;
