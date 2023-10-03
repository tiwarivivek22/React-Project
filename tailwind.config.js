/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sandybrown: "#f9b378",
        secondary: "#af250a",
        black: "#000",
        primary: "#440020",
        white: "#fff",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "19xl": "38px",
        "3xs": "10px",
        "36xl": "55px",
        smi: "13px",
      },
    },
    fontSize: {
      "5xs": "8px",
      base: "16px",
      "29xl": "48px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
