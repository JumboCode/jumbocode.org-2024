/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#64debc",
        background: "#1e1e1e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
