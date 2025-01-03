export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair", "serif"],
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
      },

    },
  },
  plugins: [],
}