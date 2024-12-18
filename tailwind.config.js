/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'todo-bg': "url('../src/assets/ToImage.jpg')"
, // Make sure the path is correct
      },
    },
  },
  plugins: [],
}
