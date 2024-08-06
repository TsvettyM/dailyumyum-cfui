import IconClose from "@/features/icons/components/IconClose";
import IconLogo from "@/features/icons/components/IconLogo";
import IconLogOut from "@/features/icons/components/IconLogOut";
import IconMobileMenu from "@/features/icons/components/IconMobileMenu";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const AdminNav = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="admin__nav flex flex-col">
      <button
        type="button"
        className={classNames("absolute top-3 left-3 lg:hidden", {
          "mr-auto": router.pathname !== "/admin/recipes",
        })}
        onClick={handleMenuToggle}
      >
        <IconMobileMenu className="w-6 h-4" />
      </button>

      <nav
        className={classNames(
          "fixed lg:relative flex flex-col shadow-right z-20 shadow-[#889FA5] bg-[#DCECEA] font-semibold text-black h-full w-[200px] sm:w-[250px] pt-4 px-3 lg:pl-3 transform transition-transform duration-300",
          {
            "translate-x-0": isMenuOpen,
            "-translate-x-full lg:translate-x-0": !isMenuOpen,
          }
        )}
      >
        <button
          type="button"
          className={classNames("absolute top-7 right-2 lg:hidden", {
            "mr-auto": router.pathname !== "/admin/recipes",
          })}
          onClick={handleMenuToggle}
        >
          <IconClose className="w-6 h-4" />
        </button>

        <IconLogo className="h-9 xl:h-10 w-[140px] xl:w-[160px] mb-3" />

        <Link
          href="/admin/recipes"
          className={`mb-3 hover:text-black/20 text-20 sm:text-24 hover:italic ${
            router.pathname === "/admin/recipes" ? "underline" : ""
          }`}
        >
          Recipes
        </Link>
        <Link
          href="/admin/category"
          className={`hover:text-black/20 text-20 sm:text-24 hover:italic ${
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
    </div>
  );
};

export default AdminNav;
