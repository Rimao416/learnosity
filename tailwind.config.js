import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#674EFF", // Couleur principale
        secondary: "#E1DCFF", // Couleur secondaire
        dark: "#151518", // Couleur sombre
        light: "#F5F5F5", // Couleur claire
      },
    },
  },
  plugins: [],
};
