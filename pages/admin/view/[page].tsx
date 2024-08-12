import AdminCategoryView from "@/features/admin/AdminCategoryView";
import AdminRecipeView from "@/features/admin/AdminRecipeView";
import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className="view__page bg-[#EFF9F5] h-full">
      {router.asPath.includes("recipes") ? <AdminRecipeView /> : null}
      {router.asPath.includes("category") ? <AdminCategoryView /> : null}
    </div>
  );
};

export default View;
