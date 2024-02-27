import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],

  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          50: "#333333",
        },
        gray: {
          DEFAULT: "#DADADA",
          50: "#CBD5E1",
        },
        white: {
          DEFAULT: "#fff",
          50: "#F6F6F6",
        },
        primary: {
          DEFAULT: "#3498DB",
          50: "#78B9E4",
          100: "#154768",
        },
      },
    },
  },
};
export default config;
