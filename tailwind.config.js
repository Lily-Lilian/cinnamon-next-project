/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mont", "arial"],
        MontHeavy: ["MontHeavy", "arial"],
        MontSemiBold: ["MontSemiBold", "arial"],
        MontBold: ["MontBold", "arial"],
      },
      colors: {
        primary: "#222222",
        dark: "#1C1C1C",
        blue: "#5135FF",
        color: "#CFCFCF",
        gray: "#666666",
        apple:"#91F1C3",
        purple:"#52247F",
        yellow:"#FFCB47",
        beige:"#F6F6F6",
        grayish:"#989898"

      },
    },
  },
  plugins: [],
};
