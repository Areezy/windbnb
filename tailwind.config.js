module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#EB5757E5",
        grayish: "#4F4F4F",
        lightergrayish: "#F2F2F2",
        watermelon: "#EB5757",
        watermelonHover: "#e38181",
      },
      width: {
        "fit-content": "fit-content",
        400: "400px",
      },
      maxWidth: {
        "fit-content": "fit-content",
        400: "400px",
      },
      height: {
        "fit-content": "fit-content",
        300: "300px",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
      outline: {
        black: "2px solid #000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
