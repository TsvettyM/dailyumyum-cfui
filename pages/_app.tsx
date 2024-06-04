import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import "../styles/global.scss";
import CommonHeader from "@/features/common/components/CommonHeader";
import CommonFooter from "@/features/common/components/CommonFooter";

const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <CommonHeader />
      <Component {...pageProps} />
      <CommonFooter />
    </main>
  );
}
