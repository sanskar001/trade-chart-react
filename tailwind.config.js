/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "russian-black": "#131722",
        "pale-blue": "#E0E3EB",
        "linen-orange": "#EBE8E0",
        "royal-blue": "#2962FF",
        "misty-silver": "#B4B6BD",
        "alice-blue": "#F0F3FA",
        "slate-gray": "#787B86",
        "baby-blue": "#F8F9FD",
        "steel-gray": "#A3A6AF",
        "sunset-red": "#EF5350",
        "dark-green": "#26A69A",
      },
      boxShadow: {
        modal: "0 2px 4px #0003",
      },
      animation: {
        loading: "spin 0.6s linear infinite",
      },
    },
  },
  plugins: [],
};
