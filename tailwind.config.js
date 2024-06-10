/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
    variants: {
      extend: {
        backgroundColor: ['responsive','hover','focus','active'], // Add hover variant to backgroundColor
        textColor: ['responsive','hover','focus','active'], // Add hover variant to textColor
        // ...other variants
      },
    },
 

}

