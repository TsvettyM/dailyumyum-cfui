import Link from "next/link";
import IconLogo from "../icons/components/IconLogo";
import IconLogOut from "../icons/components/IconLogOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IRecipeList } from "@/pages/admin/recipes";
import axios from "axios";
import IconEdit from "../icons/components/IconEdit";
import IconDelete from "../icons/components/IconDelete";

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
      <nav className="flex flex-col bg-[#DCECEA] text-black font-semibold h-full w-[250px] pt-4 pl-3 shadow-right shadow-[#889FA5]">
        <IconLogo className="h-10 w-[160px] mb-3" />

        <Link
          href="/admin/recipes"
          className={`mb-3 hover:text-black/20 text-24 hover:italic ${
            router.pathname === "/admin/recipes" ? "underline" : ""
          }`}
        >
          Recipes
        </Link>
        <Link
          href="/admin/category"
          className={`hover:text-black/20 text-24 hover:italic ${
            router.pathname === "/admin/category" ? "underline" : ""
          }`}
        >
          Category
        </Link>

        <Link
          href="/admin"
          className={`flex items-center border border-[#748D93] shadow-[#748D93] shadow-right rounded-4 p-1 w-full max-w-[140px] text-20 hover:italic mt-auto mb-3 mr-3 ${
            router.pathname === "/admin" ? "underline" : ""
          }`}
        >
          <IconLogOut className="mx-2" />
          Log Out
        </Link>
      </nav>

      <div className="flex items-center justify-center mx-20 w-full mt-20">
        <form className="view__recipe flex flex-col items-start right-10 bottom-10 shadow-[#889FA5] shadow-spread py-8 px-10 rounded-10 w-full h-full">
          <h1 className="text-32 font-semibold text-start mb-4">View Recipe</h1>

          <div className="shadow-bottom-right shadow-[#889FA5] bg-[#DCECEA] w-full h-full rounded-10 p-4">
            <div className="flex items-start justify-start w-full">
              <div>
                <p className="text-18 text-black font-bold">
                  Id: <span className="text-16 font-medium">{data.id}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Name:{" "}
                  <span className="text-16 font-medium">{data.title}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Category:{" "}
                  <span className="text-16 font-medium">{data.category}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Products:{" "}
                  <span className="text-16 font-medium">{data.products}</span>
                </p>
                <p className="text-18 text-black font-bold">
                  Description:{" "}
                  <span className="text-16 font-medium">
                    {data.description}
                  </span>
                </p>
              </div>

              <div className="flex ml-auto space-x-1">
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
        </form>
      </div>
    </div>
  );
};

export default AdminView;
