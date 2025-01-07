import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        brand: "#32C89E",
      },
    },
  },
  plugins: [containerQueries],
};
export default config;
