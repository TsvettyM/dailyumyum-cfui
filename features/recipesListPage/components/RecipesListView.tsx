import CommonCard from "@/features/common/components/CommonCard";
import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipesBox from "./RecipesBox";

const RecipesListView = () => {
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

  // const asianRecipes = recipes.filter((recipe) => recipe.category === "Asian");
  // const turkishRecipes = recipes.filter(
  //   (recipe) => recipe.category === "Turkish"
  // );
  // const italianRecipes = recipes.filter(
  //   (recipe) => recipe.category === "Italian"
  // );
  // const germanRecipes = recipes.filter(
  //   (recipe) => recipe.category === "German"
  // );
  // const russianRecipes = recipes.filter(
  //   (recipe) => recipe.category === "Russian"
  // );
  // const mexicanRecipes = recipes.filter(
  //   (recipe) => recipe.category === "Mexican"
  // );

  return (
    <section className="recipes__list-view">
      <div className="container">
        {error && <p className="text-red">{error}</p>}

        <RecipesBox title="Asian" />

        <RecipesBox title="Mexican" />

        <RecipesBox title="Russian" />

        <RecipesBox title="Turkish" />

        <RecipesBox title="Italian" />

        <RecipesBox title="German" />

        {/* <h2 className="text-28 text-gray-500 font-bold mb-10">
          Asian ({asianRecipes.length})
        </h2>
        <div className="asian__food--list grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-16">
          {asianRecipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div>

        <h2 className="text-28 text-gray-500 font-bold mb-10">
          Mexican ({mexicanRecipes.length})
        </h2>
        <div className="mexican__food--list grid grid-cols-4 gap-8 mb-16">
          {mexicanRecipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div>

        <h2 className="text-28 text-gray-500 font-bold mb-10">
          Turkish ({turkishRecipes.length})
        </h2>
        <div className="turkish__food--list grid grid-cols-4 gap-8 mb-16">
          {turkishRecipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div>

        <h2 className="text-28 text-gray-500 font-bold mb-10">
          German ({germanRecipes.length})
        </h2>
        <div className="german__food--list grid grid-cols-4 gap-8 mb-16">
          {germanRecipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div>

        <h2 className="text-28 text-gray-500 font-bold mb-10">
          Russian ({russianRecipes.length})
        </h2>
        <div className="russian__food--list grid grid-cols-4 gap-8 mb-16">
          {russianRecipes.map((recipe, index) => (
            <CommonCard size="small" key={index} recipe={recipe} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default RecipesListView;
