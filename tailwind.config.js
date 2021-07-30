module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      gray: "#dcdcdc",
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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
