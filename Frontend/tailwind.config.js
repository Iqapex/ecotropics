// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          600: '#16a34a',
          700: '#15803d',
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    }
  },
  plugins: []
}