import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#31D1B0",
          300: "#C3F5EB",
        },
        secondary: {
          600: "#545454",
          300: "#ECECEC",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
