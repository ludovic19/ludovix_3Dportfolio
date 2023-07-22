// File is a CommonJS module; it may be converted to an ES module.
// older than ECMAScript module

// I found this solution in stackoverflow  To resolve the error, consider letting ESLint know that this file is meant to be used in the environment of Node.js by adding /*eslint-env node*/ as per the the documentation.
// !?! difference between .cjs and .js

// /*eslint-env node*/ //pour convertir
/*eslint no-undef: "error"*/ // pour prévenir les erreurs si une variable ets non définie (voir le readME 'pblm rencontré<s>                                                                                          </s>')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};