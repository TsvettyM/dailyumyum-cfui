import { useRouter } from "next/router";
import AdminFormCreateCategory from "./AdminFormCreateCategory";
import AdminFormCreateRecipe from "./AdminFormCreateRecipe";

const EditForm = () => {
  const router = useRouter();

  return (
    <div className="edit__recipe-page">
      {router.asPath.includes("recipes") ? <AdminFormCreateRecipe /> : null}
      {router.asPath.includes("category") ? <AdminFormCreateCategory /> : null}
    </div>
  );
};

export default EditForm;
