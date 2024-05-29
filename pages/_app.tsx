import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
