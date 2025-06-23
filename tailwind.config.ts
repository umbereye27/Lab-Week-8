// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D87D4A',  
          dark: '#1E40AF',
          light: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
};
