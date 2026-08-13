/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mib: {
          cream: "#fff5ec",
          brand: "#a50321",
          choco: "#7c4117",
          vivid: "#a50321",
          pink: "#ff889e",
          light: "#f7e7dc",
        },
      },
      fontFamily: {
        sans: ['"Fredoka"', '"Segoe UI"', "sans-serif"],
        display: ['"TAN Songbird"', '"Playfair Display"', "Georgia", "serif"],
      },
      borderRadius: {
        blob: "2.5rem",
      },
      boxShadow: {
        sweet: "0 18px 40px -18px rgba(124, 65, 23, 0.35)",
        glow: "0 22px 55px -20px rgba(255, 136, 158, 0.55)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(4deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
