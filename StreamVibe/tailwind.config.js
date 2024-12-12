/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {},
    screens: {
      'sm': '640px',  // Small screens (default)
      'md': '768px',  // Medium screens (default)
      'lg': '1024px', // Large screens (default)
      'xl': '1280px', // Extra-large screens (default)
      '2xl': '1536px', // New breakpoint for 2xl screens
      '5s': "200px"
    },
  },
  plugins: [],
}

