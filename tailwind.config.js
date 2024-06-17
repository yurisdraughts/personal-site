const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      base: {
        "03": "#002b36",
        "02": "#073642",
        "01": "#586e75",
        "00": "#657b83",
        0: "#839496",
        1: "#93a1a1",
        2: "#eee8d5",
        3: "#fdf6e3",
      },
      yellow: "#b58900",
      orange: "#cb4b16",
      red: "#dc322f",
      magenta: "#d33682",
      violet: "#6c71c4",
      blue: "#268bd2",
      cyan: "#2aa198",
      green: "#859900",
    },
    extend: {
      animation: {
        rotate3d: "rotate3d 30s infinite linear",
      },
      keyframes: {
        rotate3d: {
          to: {
            transform: `rotateX(360deg) rotateY(${3 * 360}deg)`,
          },
        },
      },
      spacing: {
        lg: defaultTheme.spacing[14],
        sm: defaultTheme.spacing[7],
      },
      borderRadius: {
        "4xl": defaultTheme.spacing[10]
      }
    },
  },
  plugins: [require("tailwindcss-3d")],
};
