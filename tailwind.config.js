module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      xl: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      lg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      sm: { min: "639px" },
      // => @media (min-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
