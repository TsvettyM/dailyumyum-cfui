import RecipeView from "@/features/recipepage/components/RecipeView";
import Head from "next/head";

const Recipe = () => {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>

      <RecipeView />
    </>
  );
};

export default Recipe;
