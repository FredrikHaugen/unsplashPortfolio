/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite'
      },
      keyframes: {
        'bounce-slow': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#FF4A4A",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        dark: "#212121",
        "opaque-black": "rgba(0,0,0,0.55)",
        "opaque-white": "rgba(255,255,255,0.55)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, #FF4A4A 0%, #FFA3A3 100%);",

        "gradient-rainblue":
          "linear-gradient(45deg, #FF4A4A 0%, #FFB4B4 50%, #FFD1D1 100%);",

        "single-rainblue":
          "linear-gradient(135deg, #FF4A4A 0%, #FFB4B4 50%, #FFE2E2 100%);",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
