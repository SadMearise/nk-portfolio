/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030412",
        storm: "#282b4b",
        indigo: {
          100: "#e0e7ff",
          800: "#1f1e39",
        },
        lavender: "#7a57db",
        royal: "#5c33cc",
        sand: "#d6995c",
        midnight: "#06091f",
        navy: "#161a31",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
      animation: {
        orbit: "orbit 50s linear infinite",
      },
    },
  },
  plugins: [],
};
