import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#823ae0",
        primary50: "#823ae080",
        primary80: "#823ae0cc",
        primary400: "#9456e5",
        primary600: "#762ad9",
        secondary: "#212121",
        tertiary: "#eaeaea",
        tertiary80: "#eaeaeacc",
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-secondary)"],
      },
      screens: {
        sm: "640px",
        md: "800px",
        lg: "1100px",
        xl: "1300px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
