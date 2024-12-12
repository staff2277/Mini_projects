/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '5s': '200px',
        '7s': '800px' // Add your custom breakpoint
      },
    }
  },
  plugins: [],
}

