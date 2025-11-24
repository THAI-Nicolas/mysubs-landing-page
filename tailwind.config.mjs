/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#051D40", // Primary Dark Blue
          light: "#2C5796", // Gradient End
        },
        secondary: {
          DEFAULT: "#FAFAFA", // Secondary White
        },
        accent: {
          DEFAULT: "#B1D4E0", // Clear Blue
        },
        text: {
          DEFAULT: "#051D40",
          light: "#404D60", // Light Dark Blue
        },
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        serif: ['"Gelato Luxe"', "serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom, #051D40, #2C5796)",
        "gradient-button": "linear-gradient(to right, #2C5796, #051D40)",
      },
    },
  },
  plugins: [],
};
