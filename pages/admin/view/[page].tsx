import AdminCategoryView from "@/features/admin/AdminCategoryView";
import AdminRecipeView from "@/features/admin/AdminRecipeView";
import Head from "next/head";
import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <Head>
        <title>
          Admin View {router.asPath.includes("recipes") ? "Recipe" : "Category"}
        </title>
      </Head>
      <div className="view__page bg-[#EFF9F5] h-full">
        {router.asPath.includes("recipes") ? <AdminRecipeView /> : null}
        {router.asPath.includes("category") ? <AdminCategoryView /> : null}
      </div>
    </>
  );
};

export default View;
