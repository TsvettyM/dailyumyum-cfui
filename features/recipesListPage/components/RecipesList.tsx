import CommonCard from "@/features/common/components/CommonCard";
import { IRecipeList } from "@/pages/admin/recipes";

interface IProps {
  recipes: IRecipeList[];
}

const RecipesList = ({ recipes }: IProps) => {
  return (
    <div className="recipes__box grid grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-10 w-full">
      {recipes.map((recipe, index) => (
        <CommonCard size="small" key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
