/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0C1B33',
          mid: '#152844',
          light: '#1E3A5F',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#DEB96A',
          dark: '#A88835',
        },
        cream: {
          DEFAULT: '#F8F4EE',
          dark: '#EDE7DC',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
