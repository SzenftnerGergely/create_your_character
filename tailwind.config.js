/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./results.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif"
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

