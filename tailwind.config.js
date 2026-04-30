/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef2ff",
          100: "#dce6fb",
          200: "#baccf7",
          300: "#8aaaee",
          400: "#5582e0",
          500: "#3561d2",
          600: "#2549b8",
          700: "#1e3a96",
          800: "#1a2f75",
          900: "#0f1d4a",
          950: "#090e26",
        },
        gold: {
          300: "#fde68a",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:    "0 1px 3px rgba(15,23,42,.06), 0 4px 16px rgba(15,23,42,.06)",
        lifted:  "0 8px 32px rgba(15,23,42,.14)",
        hero:    "0 32px 80px rgba(15,23,42,.22)",
        glow:    "0 0 40px rgba(56,189,248,.25)",
      },
      animation: {
        float:       "float 6s ease-in-out infinite",
        scroll:      "scroll 25s linear infinite",
        "pulse-slow":"pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
