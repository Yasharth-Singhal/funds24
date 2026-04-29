/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10233f",
        navy: "#173559",
        mist: "#f4f6f8",
        line: "#dde4ec",
        sage: "#2f7d68",
        muted: "#5f6e80",
        cyanbrand: "#22b8cf",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 35px rgba(16, 35, 63, 0.11)",
        lift: "0 22px 48px rgba(16, 35, 63, 0.16)",
      },
    },
  },
  plugins: [],
};
