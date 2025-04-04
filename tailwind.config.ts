// tailwind.config.js (or .ts)
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... content paths ...
  theme: {
    extend: {
      fontFamily: {
        // Ensure 'sans' still maps to your chosen sans-serif variable
        sans: ['var(--font-sans)', ...fontFamily.sans],
        // Ensure 'serif' maps to your chosen serif variable (now Cormorant Garamond)
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};