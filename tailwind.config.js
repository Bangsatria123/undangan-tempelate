/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('/src/components/images/wedding/1.jpg')",
        'another': "url('/src/components/images/wedding/2.jpg')",
        
      }
    },
  },
  plugins: [],
}