const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBg: "rgba(var(--dark), .95)",
        darkBg: "rgba(var(--dark))",
        primary: "rgba(var(--primary))",
        success: "var(--success)",
        error: "var(--danger)",
        footer: "rgb(51, 51, 51)",
        boxShadow: {
          secondary_btn: ` 0 5px 10px rgb(0 0 0 / 12%), 0 5px 5px rgb(0 0 0 / 10%)`,
        },
      },
      transitionTimingFunction: {
        "accelerate-ease": "var(--accelerate-ease)",
        ...defaultTheme.transitionTimingFunction,
      },
      keyframes: {
        animateLoading: {
          to: { opacity: 0.2 },
        },
      },
      animation: {
        loading: "animateLoading 0.6s ease-in-out infinite alternate",
        ...defaultTheme.animation,
      },
    },
    screens: {
      menu: "940px",
      xs: "400px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      hero: ["Oswald"],
      ...defaultTheme.fontFamily,
    },
    backgroundImage: {
      services: "url(https://www.venuslab.co/images/home-banner.jpg)",
      hero: "linear-gradient(to right bottom, rgba(var(--dark),0.99), rgba(var(--dark),0.99));",
      ...defaultTheme.backgroundImage,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hero": {
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        },
      });
    }),
  ],
};
