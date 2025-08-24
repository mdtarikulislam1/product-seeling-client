/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // app router এর জন্য
    "./pages/**/*.{js,ts,jsx,tsx}", // pages router এর জন্য
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
