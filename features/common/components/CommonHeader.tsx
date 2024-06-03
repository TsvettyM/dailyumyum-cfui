import IconLogo from "@/features/icons/components/IconLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import CommonButton from "./CommonButton";
import IconMobileMenu from "@/features/icons/components/IconMobileMenu";
import CommonDropdownButton from "./CommonDropDownButton";
import classNames from "classnames";

const CommonHeader = () => {
  const router = useRouter();

  return (
    <header>
      <div className="container flex items-center justify-center py-4">
        <IconLogo className="mr-auto md:mr-8 h-11 w-[200px]" />

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

        {router.pathname === "/recipes" ? (
          <CommonDropdownButton
            className="ml-auto mr-5"
            title={
              <p className="flex">
                All
                <span className="flex items-center text-gray-500 ml-1">
                  (5)
                </span>
              </p>
            }
            items={["All", "Asian", "Mexican"]}
          />
        ) : null}

        <button
          type="button"
          className={classNames("md:hidden", {
            "ml-auto": router.pathname !== "/recipes",
          })}
        >
          <IconMobileMenu className="w-6 h-4" />
        </button>
      </div>
    </header>
  );
};

export default CommonHeader;
