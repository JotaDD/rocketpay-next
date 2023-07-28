/** @type {import('tailwindcss').Config} */

import bbg from './public/cc-bg.svg'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // 'cc-bg': "url('./public/cc-bg.svg')",
      },
      dropShadow: {
        'j-shadow': '0 0.25rem 0.25rem rgb(22 22 22 / 16%);',
      }
    },
  },
  plugins: [

  ],
}
