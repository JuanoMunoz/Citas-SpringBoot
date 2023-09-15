/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
<<<<<<< HEAD
        fadeOut: "fadeIn 0.5s ease-in-out",
        zoomIn: "zoomIn 0.5s ease-in-out",
        zoomOut: "zoomOut 0.5s ease-in-out",
        leaving: "leaving 1s ease-in-out",
        entrando: "entrando 1s ease-in-out",
=======
        zoomIn: "zoomIn 1s ease-in-out",
>>>>>>> fd4041bc77bf097e153e173be2d3c7c4aab9faef
      },
      keyframes: {
        leaving: {
          "0%": {
            top: 0,
            right: 0,
          },
          "100%": {
            top: 0,
            right: "-20rem",
          },
        },
        entrando: {
          "0%": {
            top: 0,
            right: "-20rem",
          },
          "100%": {
            top: 0,
            right: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": { opacity: 100 },
        },
        fadeOut: {
          "0%": {
            opacity: 100,
          },
          "100%": { opacity: 0 },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        zoomOut: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
