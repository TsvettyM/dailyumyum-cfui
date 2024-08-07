import { useRouter } from "next/router";
import AdminFormCreateRecipe from "./AdminFormCreateRecipe";
import AdminFormCreateCategory from "./AdminFormCreateCategory";

const EditForm = () => {
  const router = useRouter();

  return (
    <div className="edit__recipe-page w-full max-w-[500px] px-5">
      {router.asPath.includes("recipes") ? <AdminFormCreateRecipe /> : null}
      {router.asPath.includes("category") ? <AdminFormCreateCategory /> : null}
    </div>
  );
};

export default EditForm;
