/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorText: "var(--colorText)",
        colorBg: "var(--colorBg)",
        colorBgs: "var(--colorBgs)"
      },
    },
    fontFamily: {
      fontHead: ["DM Mono", "monospace"],
      fontBody: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "0rem",

      screens: {
        sm: '100%'
      }
    }
  },
  plugins: [],
}

