import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#30DB5B",
      red: "#FF453A",
      blue: "#0A84FF",
      yellow: "#FFD60A",
      purple: "#BF5AF2",
      orange: "#FF9F0A",
      black: "#000000",
      cyan: "#64D2FF",
      indigo: "#5E5CE6",
      pink: "#FF2D55",
      gray: "#161617",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
