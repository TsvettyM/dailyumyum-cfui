import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import "../styles/global.scss";
import CommonHeader from "@/features/common/components/CommonHeader";
import CommonFooter from "@/features/common/components/CommonFooter";
import { useRouter } from "next/router";

const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className={nunito.className}>
      {!router.pathname.includes("/admin") && <CommonHeader />}
      <Component {...pageProps} />
      {!router.pathname.includes("/admin") && <CommonFooter />}
    </main>
  );
}
