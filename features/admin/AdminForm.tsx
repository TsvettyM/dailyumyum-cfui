import { useRouter } from "next/router";
import AdminFormCreateRecipe from "./AdminFormCreateRecipe";
import AdminFormCreateCategory from "./AdminFormCreateCategory";

const AdminForm = () => {
  const router = useRouter();

  return (
    <div className="admin__form flex flex-col items-center justify-center bg-[#EFF9F5] h-full">
      {router.asPath.includes("recipes") ? <AdminFormCreateRecipe /> : null}
      {router.asPath.includes("category") ? <AdminFormCreateCategory /> : null}
    </div>
  );
};

export default AdminForm;
