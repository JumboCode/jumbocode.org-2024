import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        gray: colors.zinc,
        brand: "#32C89E",
        background: "#171719",
        subtext: "#A1A1A1"
      },
    },
  },
  plugins: [containerQueries],
};

export default config;
