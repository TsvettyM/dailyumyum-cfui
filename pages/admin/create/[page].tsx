import { useRouter } from "next/router";
import AdminFormCreate from "../../../features/admin/AdminFormCreate";
import Head from "next/head";

const Create = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Admin Create
          {router.asPath.includes("recipes") ? "Recipe" : "Category"}
        </title>
      </Head>
      <div className="create__page flex flex-col items-center justify-center bg-[#EFF9F5] h-full py-10">
        <AdminFormCreate />
      </div>
    </>
  );
};

export default Create;
