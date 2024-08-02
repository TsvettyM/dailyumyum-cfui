import AdminHeader from "@/features/admin/AdminHeader";
import IconDelete from "@/features/icons/components/IconDelete";
import IconEdit from "@/features/icons/components/IconEdit";
import IconLogo from "@/features/icons/components/IconLogo";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IconLogOut from "@/features/icons/components/IconLogOut";
import IconView from "@/features/icons/components/IconView";

interface ICategory {
  id: number;
  title: string;
  description: string;
}

const AdminCategoryPage = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      setData(res.data);
    });
  }, [router]);

  const handleDelete = async (id: number) => {
    axios
      .delete("http://localhost:3001/category/" + id)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the category!", error);
      });
  };

  return (
    <div className="admin__category-page flex h-full bg-[#EFF9F5]">
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
            router.pathname === "/admin"
          }`}
        >
          <IconLogOut className="mx-2" />
          Log Out
        </Link>
      </nav>

      <div className="mx-20 w-full mt-5">
        <AdminHeader title="Category" />

        <div className="grid grid-cols-[1fr_1fr_1fr_150px] gap-5 pt-10 pb-5 text-20 font-bold px-3">
          <p>Id</p>
          <p>Name</p>
          <p>Description</p>
          <p>Action</p>
        </div>
        <ul className="shadow-spread bg-white rounded-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_1fr_1fr_150px] gap-5 w-full shadow-bottom last-of-type:rounded-br-8 last-of-type:rounded-bl-8 p-3"
            >
              <p>{item.id}</p>
              <p>{item.title}</p>
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
                    pathname: "/admin/edit/category",
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
  );
};

export default AdminCategoryPage;
