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
          700: "#696969",
          600: "#545454",
          500: "#D6D6D6",
          400: "#7D7D7D",
          300: "#ECECEC",
          200: "#969696",
          100: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
