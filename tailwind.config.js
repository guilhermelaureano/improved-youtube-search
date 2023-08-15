/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  darkMode: 'media',
  theme: {},
  plugins: [require('flowbite/plugin')],
};
