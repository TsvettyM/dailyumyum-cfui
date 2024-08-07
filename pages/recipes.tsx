import RecipesListView from "@/features/recipesListPage/components/RecipesListView";
import Head from "next/head";

const Recipes = () => {
  return (
    <div className="recipes">
      <Head>Recipes</Head>

      <RecipesListView />
    </div>
  );
};

export default Recipes;
