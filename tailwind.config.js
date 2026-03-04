/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        dark: '#111111',
        card: '#1a1a1a',
      },
    },
  },
  plugins: [],
}