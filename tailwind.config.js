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
        "6xl": "60px",
        "4xl": "40px",
        "3xl": "24px",
        "2xl": "20px",
        xl: "18px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
