/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background-color": "#fff",
        darkslateblue: {
          "100": "#0152a8",
          "200": "#004a99",
        },
        gray: {
          "100": "#292930",
          "200": "#1b2534",
          "300": "#1c1c1c",
          "400": "rgba(28, 28, 28, 0.6)",
          "500": "rgba(255, 255, 255, 0.86)",
          "600": "rgba(30, 30, 30, 0.5)",
        },
        silver: {
          "100": "#c8c8c8",
          "200": "#b9b9b9",
        },
        dimgray: "#545454",
        aquamarine: "#0fe3af",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e1e1e1",
          "300": "#dfdfdf",
          "400": "#dcdcdc",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f4f2f0",
          "300": "#f1f1f1",
        },
        "second-text-color": "#737373",
        lightgray: {
          "100": "#cecece",
          "200": "#cdcdcd",
        },
        cornflowerblue: {
          "100": "#2f85e1",
          "200": "#2b78ca",
        },
        darkslategray: {
          "100": "#363636",
          "200": "#143450",
        },
        "grey-line": "#737b7d",
        "primeraly-black": "#383c3e",
        black: "#000",
        lavender: "#dcedfe",
        lightcoral: "#fc9c9c",
      },
      spacing: {},
      fontFamily: {
        calibri: "Calibri",
        inter: "Inter",
        "source-sans-pro": "'Source Sans Pro'",
        lato: "Lato",
        montserrat: "Montserrat",
        inherit: "inherit",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
      },
      borderRadius: {
        "4xs": "9px",
        "10xl": "29px",
        "8xs": "5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "11xl": "30px",
      sm: "14px",
      "31xl": "50px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
