import CommonButton from "@/features/common/components/CommonButton";
import CommonInput from "@/features/common/components/CommonInput";
import IconLogo from "@/features/icons/components/IconLogo";
import IconProfile from "@/features/icons/components/IconProfile";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    axios
      .post("/api/login", { username, password })
      .then(() => {
        router.push("/admin/recipes");
      })
      .catch((err) => {
        setError("Invalid username or password");
      });
  }

  return (
    <div className="admin__page bg-[#EFF9F5]">
      <div className="container flex flex-col justify-center items-center py-10">
        <IconLogo className="h-11 w-[200px]" />

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center w-[500px] shadow-[#748D93] shadow-bottom-right bg-[#DCECEA] p-6 rounded-8 mt-10"
        >
          <IconProfile className="w-12 h-12 mb-1" />
          <p className="mb-10 text-18 font-semibold">Please Log In</p>

          <CommonInput
            label="Username"
            name="username"
            type="text"
            styleMode="black"
            placeholder="Enter your username"
            className="text-14 text-black font-normal outline-none mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <CommonInput
            label="Password"
            name="password"
            type="password"
            styleMode="black"
            placeholder="Enter a secure password"
            className="text-14 text-black font-normal outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red mt-1">{error}</p>}

          <CommonButton
            type="submit"
            style="green"
            title="Log In"
            className="mt-20 ml-auto !w-[260px] h-11"
          />
        </form>

        <Link href="/" className="text-black/20 mt-4">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
