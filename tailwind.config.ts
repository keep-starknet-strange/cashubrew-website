import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#e9d8fd",
          500: "#9f7aea",
          800: "#44337a",
          900: "#322659",
        },
      },
    },
  },
  plugins: [],
};
export default config;
