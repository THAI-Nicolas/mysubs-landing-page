/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A7EBB',
          dark: '#0B6FA3',
          light: '#1B8FCC',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          light: '#16213E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
