import type { Config } from "tailwindcss";
const boxShadow = require("./styles/tailwind/box-shadow.tailwind");
const fontSize = require("./styles/tailwind/font-size.tailwind");
const colors = require("./styles/tailwind/colors.tailwind");
const lineHeight = require("./styles/tailwind/line-height.tailwind");
const borderRadius = require("./styles/tailwind/border-radius.tailwind");
const borderWidth = require("./styles/tailwind/border-width.tailwind");
const screens = require("./styles/tailwind/screens.tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: boxShadow,
    fontSize: fontSize,
    colors: colors,
    lineHeight: lineHeight,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    screens: screens,
  },
  plugins: [],
};
export default config;
