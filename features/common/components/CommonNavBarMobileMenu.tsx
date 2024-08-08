import IconClose from "@/features/icons/components/IconClose";
import IconMobileMenu from "@/features/icons/components/IconMobileMenu";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CommonNavBarMobileMenu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div
      className={classNames(
        "common__nav-bar--MM flex flex-col z-20 md:hidden",
        {
          "ml-auto": router.pathname !== "/recipes",
        }
      )}
    >
      <button type="button" onClick={handleMenuToggle}>
        <IconMobileMenu className="w-6 h-4" />
      </button>

      <nav
        className={classNames(
          "md:hidden flex flex-col fixed right-0 top-0 h-full shadow-left shadow-[#889FA5] bg-[#DCECEA] w-[200px] sm:w-[250px] pt-4 px-3 lg:pl-3 duration-200 font-medium mr-auto",
          {
            "translate-x-full": !isMenuOpen,
            "translate-x-0": isMenuOpen,
          }
        )}
      >
        <button
          type="button"
          className={classNames("absolute top-5 right-2 flex md:hidden", {
            "mr-auto": router.pathname !== "/recipes",
          })}
          onClick={handleMenuToggle}
        >
          <IconClose className="w-6 h-4" />
        </button>

        <Link
          href="/"
          className={`mb-3 hover:text-black/20 text-20 sm:text-24 hover:italic ${
            router.pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>

        <Link
          href="/recipes"
          className={`mb-3 hover:text-black/20 text-20 sm:text-24 hover:italic ${
            router.pathname === "/recipes" ? "underline" : ""
          }`}
        >
          Recipes
        </Link>

        <Link
          href="/about"
          className={`mb-3 hover:text-black/20 text-20 sm:text-24 hover:italic ${
            router.pathname === "/about" ? "underline" : ""
          }`}
        >
          About Us
        </Link>
      </nav>
    </div>
  );
};

export default CommonNavBarMobileMenu;
