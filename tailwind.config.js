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
        colorBgs: "var(--colorBgs)",
        colorTechBg: "var(--colorTechBg)",
        colorLinkBg: "var(--colorLinkBg)",
        colorLinkHover: "var(--colorLinkHover)",
        colorSocialBg: "var(--colorSocialBg)",
        colorSocialHover: "var(--colorSocialHover)",
      },

      boxShadow: {
        'customShadow': 'inset 0px 0px 5px 2px var(--colorBg)',
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

