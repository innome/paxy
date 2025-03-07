// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Agregamos la animación de "sway" (balanceo suave) para la planta
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        sway: 'sway 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
