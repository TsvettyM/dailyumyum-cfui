import IconLogo from "@/features/icons/components/IconLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import CommonButton from "./CommonButton";
import axios from "axios";
import { useEffect, useState } from "react";
import CommonDropdownButton from "./CommonDropDownButton";
import CommonNavBarMobileMenu from "./CommonNavBarMobileMenu";
import IRecipe from "@/features/homepage/interfaces/recipe.interface";
import { IRecipeList } from "@/pages/admin/recipes";

export interface ICategoryListItem {
  id: string;
  title: string;
  description: string;
}

export interface IRecipeListitem {
  id: string;
  title: string;
  category: string;
  products: string;
  description: string;
}

const CommonHeader = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((categoryRes) => {
        const categoryList = (categoryRes.data as ICategoryListItem[]).map(
          (item) => item.title
        );
        setCategories(categoryList);

        return axios.get("http://localhost:3001/recipes");
      })

      .catch((err) => {
        setError("There was an error fetching data.");
        console.error(err);
      });
  }, []);

  function handleOnClick(arg: string) {
    router.push({ pathname: "/recipes", query: { category: arg } });
  }

  return (
    <header>
      <div className="container flex items-center justify-center py-4">
        <IconLogo className="mr-auto md:mr-8 h-11 w-[150px] s:w-[200px]" />

        <nav className="hidden gap-8 font-medium mr-auto md:flex">
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-green"
                : "opacity-50 hover:opacity-100"
            }
          >
            Home
          </Link>

          <Link
            href="/recipes"
            className={
              router.pathname === "/recipes"
                ? "text-green"
                : "opacity-50 hover:opacity-100"
            }
          >
            Recipes
          </Link>

          <Link
            href="/about"
            className={
              router.pathname === "/about"
                ? "text-green"
                : "opacity-50 hover:opacity-100"
            }
          >
            About Us
          </Link>
        </nav>

        <CommonButton
          type="button"
          href="/"
          title="Explore"
          style="green"
          className="hidden w-[115px] h-8"
        />

        {router.pathname === "/recipes" && categories.length > 0 ? (
          <CommonDropdownButton
            className="relative ml-auto mr-5 bg-[#DCECEA] rounded-full"
            onClick={handleOnClick}
            title={
              <p className="flex text-14 s:text-16">
                All
                <span className="flex items-center text-gray-500 ml-1">
                  ({categories.length})
                </span>
              </p>
            }
            items={["All", ...categories]}
          />
        ) : null}

        <CommonNavBarMobileMenu />
      </div>
    </header>
  );
};

export default CommonHeader;
