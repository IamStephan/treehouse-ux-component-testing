const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./src/components/**/*.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        gray: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dfdfdf",
          300: "#cbcbcb",
          400: "#a8a8a8",
          500: "#878787",
          600: "#6d6d6d",
          700: "#5f5f5f",
          800: "#4a4a4a",
          900: "#3d3d3d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addBase }) {
      const essential_base = {
        ".bg-index": { zIndex: "-1" },

        ".max-w-screen-sm": { maxWidth: "640px" },
        ".max-w-screen-md": { maxWidth: "768px" },
        ".max-w-screen-lg": { maxWidth: "1024px" },
        ".max-w-screen-xl": { maxWidth: "1280px" },
        ".max-w-screen-2xl": { maxWidth: "1536px" },

        ".min-w-screen-sm": { minWidth: "640px" },
        ".min-w-screen-md": { minWidth: "768px" },
        ".min-w-screen-lg": { minWidth: "1024px" },
        ".min-w-screen-xl": { minWidth: "1280px" },
        ".min-w-screen-2xl": { minWidth: "1536px" },

        ".w-screen-sm": { width: "640px" },
        ".w-screen-md": { width: "768px" },
        ".w-screen-lg": { width: "1024px" },
        ".w-screen-xl": { width: "1280px" },
        ".w-screen-2xl": { width: "1536px" },

        ".object-contain-": { objectFit: "contain" },
        ".object-cover-": { objectFit: "cover" },

        ".object-top-": { objectPosition: "top" },
        ".object-left-": { objectPosition: "left" },
        ".object-bottom-": { objectPosition: "bottom" },
        ".object-right-": { objectPosition: "right" },
      };

      addBase(essential_base);
    }),
  ],
};
