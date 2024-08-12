import AdminEdit from "@/features/admin/AdminEdit";
import Head from "next/head";
import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Admin Edit {router.asPath.includes("recipes") ? "Recipe" : "Category"}
        </title>
      </Head>
      <div className="edit__page flex flex-col items-center justify-center bg-[#EFF9F5] h-full py-10">
        <AdminEdit />
      </div>
    </>
  );
};

export default Edit;
