/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "85.375rem",
        "9xl": "100rem",
        "10xl": "120rem",
      },
      colors: {
        "main-back": "#21222d",
        "baltic-sea": "#1c1b21",
        jumbo: "#858587",
        tundora: "#413c40",
        "cloud-bust": "#242b4b",
        "blue-violet": "#5f49b9",
        portage: "#a898f7",
        perano: "#ad9ef5",
        "persian-blue": "#3a21bd",
        "brink-pink": "#fe5a92",
        eunry: "#c8a2a6",
        "slat-box": "#716974",
        pelorous: "#49a0c1",
        "havelock-blue": "#4696d5",
        "jungle-green": "#249f6b",
        "paris-daisy": "#fdf378",
        "bitter-lemon": "#d7ce0b",
        scorpion: "#705e65",
        "off-white": "#fefefe",
      },
    },
  },
  plugins: [require("daisyui")],
};
