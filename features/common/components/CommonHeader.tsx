import IconLogo from "@/features/icons/components/IconLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import CommonButton from "./CommonButton";
import IconMobileMenu from "@/features/icons/components/IconMobileMenu";

const CommonHeader = () => {
  const router = useRouter();

  return (
    <header>
      <div className="container flex items-center justify-center py-4">
        <IconLogo className="mr-auto md:mr-8 h-11 w-[200px]" />

        <button>
          <IconMobileMenu className="ml-auto md:hidden" />
        </button>

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
      </div>
    </header>
  );
};

export default CommonHeader;
