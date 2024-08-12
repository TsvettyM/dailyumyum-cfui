import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import IconEdit from "../icons/components/IconEdit";
import IconDelete from "../icons/components/IconDelete";
import AdminNav from "@/pages/admin/sidenav";

const AdminView = () => {
  const [data, setData] = useState<IRecipeList>();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes/" + router.query.id)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        router.replace("/admin/recipes");
      });
  }, [router]);

  const handleDelete = async (id: number) => {
    axios
      .delete("http://localhost:3001/recipes/" + id)
      .then(() => {
        router.back();
      })
      .catch((error) => {
        console.error("There was an error deleting the recipe!", error);
      });
  };

  if (!data) {
    return;
  }

  return (
    <div className="admin__view-page flex h-full w-full bg-[#EFF9F5]">
      <AdminNav />

      <div className="admin__recipe--view flex items-center justify-center mx-10 md:mx-20 w-full mt-14 md:mt-20">
        <form className="view__recipe flex flex-col items-start bottom-10 shadow-[#889FA5] shadow-spread py-8 px-10 rounded-10 w-full h-full">
          <h1 className="text-32 font-semibold text-start mb-4">View Recipe</h1>

          <div className="shadow-bottom-right shadow-[#889FA5] bg-[#DCECEA] w-full h-full rounded-10 p-4">
            <div className="flex items-start justify-start w-full">
              <div className="relative flex flex-col w-full">
                <p className="text-18 text-black font-bold">
                  Id: <span className="text-16 font-medium">{data.id}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Name:
                  <span className="text-16 font-medium">{data.title}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Category:
                  <span className="text-16 font-medium">{data.category}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Products:
                  <span className="text-16 font-medium">{data.products}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Description:
                  <span className="text-16 font-medium">
                    {data.description}
                  </span>
                </p>

                <div className="flex absolute right-0 top-0 space-x-1">
                  <Link
                    href={{
                      pathname: "/admin/edit/recipes",
                      query: { id: data.id.toString() },
                    }}
                    className="flex items-center"
                  >
                    <IconEdit className="mx-2 w-6 h-6" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(data.id)}
                    className="flex items-center"
                  >
                    <IconDelete className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminView;
