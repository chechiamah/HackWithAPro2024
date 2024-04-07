/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-left': "url('/images/purple_blob.jpg')",
        'top-right': "url('/images/purple_blob.svg')",
        'bottom-left': "url('/images/purple_blob.svg')",
        'bottom-right': "url('/images/purple_blob.svg')",
      },
    },
  },
  plugins: [],
}
