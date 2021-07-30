module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      gray: "#dcdcdc",
      black: "#000",
      primary: "#6AB5FF",
      secondary: "#AE5AFF",
      lightgray: "#EEEEEE",
      darkgray: "#666666",
    },
    zIndex: {
      "-10": "-10",
    },
    minHeight: {
      "87vh": "87vh",
      80: "20rem",
    },
    minWidth: {
      "87vw": "70vw",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
