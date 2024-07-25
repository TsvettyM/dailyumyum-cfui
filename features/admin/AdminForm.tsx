import AdminFormCreateCategory from "./AdminFormCreateCategory";
import AdminFormCreateRecipe from "./AdminFormCreateRecipe";

const AdminForm = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EFF9F5] h-full">
      <AdminFormCreateRecipe />

      {/* <AdminFormCreateCategory /> */}
    </div>
  );
};

export default AdminForm;
