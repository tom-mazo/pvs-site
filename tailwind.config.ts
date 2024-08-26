import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pvs-indigo": "#04223A",
        "pvs-gold": "#e6ac3c",
        "pvs-beige": "#e0c99d",
      },
      fontFamily: {
        'serif': ['var(--font-marcellus)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    layout: {},
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: "#04223A",
          foreground: "#e0c99d",
          primary: "#e6ac3c"
        }, // light theme colors
      },
    }
  })]
};
export default config;
