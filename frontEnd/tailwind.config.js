/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        text_color: "var(--text_color)",
        border_nav: "var(--border_nav)",
        bg_header: "var(--bg_header)",
      },
    },
  },
  plugins: [],
}