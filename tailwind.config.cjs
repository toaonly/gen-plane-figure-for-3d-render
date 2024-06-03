const daisyui = require('daisyui')
const tailwindcssTypography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [tailwindcssTypography, daisyui],
  daisyui: {
    darkTheme: 'business',
    themes: ['business', 'lofi'],
  },
}

module.exports = config
