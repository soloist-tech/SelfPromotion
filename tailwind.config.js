/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: "#4f46e5", // indigo-600
        secondary: "#10b981", // emerald-500
        accent: "#f43f5e", // rose-500
      },
      fontFamily: {
        // Add custom fonts here if needed
      },
      animation: {
        // Add custom animations here
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}