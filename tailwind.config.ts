import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#BEA277",
        secondary:"#25442F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "10rem",
        },
      },
      maxWidth: {
        "2xl": "1280px",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        poppinsRegular: ["Poppins", "regular"],
        poppinsLight: ["Poppins", "light"],
        pinyon: ["Pinyon Script", "regular"],
      },
      backgroundImage:{
        heroImage: "url('/headerBG.png')",
      }
    },
  },
  plugins:[require("daisyui")]
} satisfies Config;
