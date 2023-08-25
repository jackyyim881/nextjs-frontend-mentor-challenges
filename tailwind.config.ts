import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      paragraph: "16px",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      mobile: "375px",
    },
    extend: {
      colors: {
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        magnolia: "hsl(217, 100%, 97%)",
        "marine-blue": "hsl(213, 96%, 18%)",
        alabaster: "hsl(231, 100%, 99%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
