import IconLogo from "@/features/icons/components/IconLogo";
import Link from "next/link";
import { useRouter } from "next/router";

const CommonHeader = () => {
  const router = useRouter();

  return (
    <header>
      <div className="container flex items-center justify-center py-4 w-full">
        <IconLogo className="mr-auto h-11 w-full max-w-[200px]" />

        <nav className="flex gap-5 font-medium text-black ml-auto">
          <Link
            href="/"
            className={router.pathname === "/" ? "text-green" : ""}
          >
            Home
          </Link>

          <Link
            href="/recipes"
            className={router.pathname === "/recipes" ? "text-green" : ""}
          >
            Recipes
          </Link>

          <Link
            href="/about"
            className={router.pathname === "/about" ? "text-green" : ""}
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default CommonHeader;
