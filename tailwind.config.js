/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./page-section/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#231F20",
        darkBlue: "#06748E",
        lightBlue: "#41BFDD",
        darkGray: "#D3D2D2",
        lightGray: "#F4F4F4",
      },
      fontSize: {
        "6xs": "60px",
        "4xs": "40px",
        "3xs": "24px",
        "2xs": "20px",
        xs: "18px",
        xssm: "16px",
      },
    },
  },
  plugins: [],
};
