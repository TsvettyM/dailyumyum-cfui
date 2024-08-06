import AdminHeader from "@/features/admin/AdminHeader";
import IconDelete from "@/features/icons/components/IconDelete";
import IconEdit from "@/features/icons/components/IconEdit";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IconClose from "@/features/icons/components/IconClose";
import IconView from "@/features/icons/components/IconView";
import IconSort from "@/features/icons/components/IconSort";
import AdminNav from "./sidenav";

export interface IRecipeList {
  id: number;
  title: string;
  category: string;
  products: string;
  description: string;
}

const AdminRecipesPage = () => {
  const [data, setData] = useState<IRecipeList[]>([]);
  const [showMessage, setShowMessage] = useState("");
  const [isSort, setIsSorted] = useState<{ key: string; direction: string }>({
    key: "id",
    direction: "asc",
  });
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      setData(res.data);
    });

    if (router.query.success) {
      setShowMessage("Congrats! Your recipe uploaded successfully.");

      setTimeout(() => {
        setShowMessage("");
      }, 2000);

      router.replace("/admin/recipes", undefined, { shallow: true });
    }
  }, [router]);

  const handleDelete = async (id: number) => {
    axios
      .delete("http://localhost:3001/recipes/" + id)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the recipe!", error);
      });
  };

  function handleSort(key: string) {
    let direction = "asc";
    if (isSort.key === key && isSort.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a: any, b: any) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setIsSorted({ key, direction });
  }

  return (
    <div className="admin__recipes-page flex h-full bg-[#EFF9F5]">
      <AdminNav />

      <div className="mx-5 sm:mx-10 md:mx-20 w-full mt-10 overflow-x-auto">
        <AdminHeader title="Recipes" />

        {showMessage && (
          <div className="success__message fixed right-10 bottom-10 flex justify-center items-center w-[400px] bg-[#DCECEA] border-t-5 border-[#748D93] rounded-b-8 px-2 py-2 shadow-bottom">
            <div className="flex justify-center items-center w-full">
              <p className="text-14 text-[#748D93]">
                <span className="font-semibold">Congrats!</span>
                {showMessage}
                <button
                  type="button"
                  onClick={() => setShowMessage("")}
                  className="ml-3"
                >
                  <IconClose className="text-center ml-auto" />
                </button>
              </p>
            </div>
          </div>
        )}

        <div className="outline-none rounded-8 overflow-x-auto w-full">
          <div className="grid grid-cols-[1fr_1fr_150px_1fr_1fr_150px] gap-5 pt-5 sm:pt-10 pb-5 text-20 font-bold px-3 min-w-[1200px]">
            <p className="flex items-center">
              Id
              <button
                onClick={() => handleSort("id")}
                className="flex items-center ml-1.5"
              >
                <IconSort
                  className={`w-6 h-6 transition-transform ${
                    isSort.key === "id" && isSort.direction === "asc"
                      ? "rotate-180 stroke-black"
                      : isSort.key === "id" && isSort.direction === "desc"
                      ? "rotate-0 stroke-green"
                      : "stroke-black"
                  }`}
                />
              </button>
            </p>
            <p className="flex items-center">
              Name
              <button
                onClick={() => handleSort("title")}
                className="flex items-center ml-1.5"
              >
                <IconSort
                  className={`w-6 h-6 transition-transform ${
                    isSort.key === "title" && isSort.direction === "asc"
                      ? "rotate-180 stroke-black"
                      : isSort.key === "title" && isSort.direction === "desc"
                      ? "rotate-0 stroke-green"
                      : "stroke-black"
                  }`}
                />
              </button>
            </p>
            <p className="flex items-center">
              Category
              <button
                onClick={() => handleSort("category")}
                className="flex items-center ml-1.5"
              >
                <IconSort
                  className={`w-6 h-6 transition-transform ${
                    isSort.key === "category" && isSort.direction === "asc"
                      ? "rotate-180 stroke-black"
                      : isSort.key === "category" && isSort.direction === "desc"
                      ? "rotate-0 stroke-green"
                      : "stroke-black"
                  }`}
                />
              </button>
            </p>
            <p>Products</p>
            <p>Description</p>
            <p>Action</p>
          </div>

          <ul className="shadow-spread bg-white rounded-8 min-w-[1200px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_1fr_150px_1fr_1fr_150px] gap-5 w-full shadow-bottom last-of-type:rounded-br-8 last-of-type:rounded-bl-8 p-3"
              >
                <p>{item.id}</p>
                <p className="line-clamp-1">{item.title}</p>
                <p>{item.category}</p>
                <p className="line-clamp-1">{item.products}</p>
                <p className="line-clamp-1">{item.description}</p>

                <div className="flex items-start space-x-4">
                  <Link
                    href={{
                      pathname: "/admin/view/recipes",
                      query: { id: item.id.toString() },
                    }}
                    className="flex items-center"
                  >
                    <IconView className="w-6 h-6" />
                  </Link>

                  <Link
                    href={{
                      pathname: "/admin/edit/recipes",
                      query: { id: item.id.toString() },
                    }}
                    className="flex items-center"
                  >
                    <IconEdit className="mx-2 w-6 h-6" />
                  </Link>

                  <button type="button" onClick={() => handleDelete(item.id)}>
                    <IconDelete className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminRecipesPage;
