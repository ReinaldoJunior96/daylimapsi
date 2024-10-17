module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#12414C", // Azul escuro
        secondary: "#3AA8A3", // Verde água
        neutral: "#F9F6F4", // Cor neutra/bege claro
        accent: "#F7BBBC", // Rosa suave
        muted: "#D18085", // Rosa mais escuro
        aaa: "#D12385",
        sss: "#A98085",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
