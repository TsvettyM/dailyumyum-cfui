import { useRouter } from "next/router";
import AdminFormCreateRecipe from "./AdminFormCreateRecipe";
import AdminFormCreateCategory from "./AdminFormCreateCategory";

const AdminFormCreate = () => {
  const router = useRouter();

  return (
    <div className="admin__form-create flex flex-col max-w-[500px] px-5 items-center justify-center w-full bg-[#EFF9F5] h-full">
      {router.asPath.includes("recipes") ? <AdminFormCreateRecipe /> : null}
      {router.asPath.includes("category") ? <AdminFormCreateCategory /> : null}
    </div>
  );
};

export default AdminFormCreate;
