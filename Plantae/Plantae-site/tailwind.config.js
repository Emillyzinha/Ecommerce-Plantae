
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gafata': ['Gafata', 'sans-serif'],
      'quick': ['Quicksand', 'sans-serif'],
      'galdeano': ['Galdeano', 'sans-serif'],
      'titulos': ['"Tenor Sans"', 'sans-serif'],
      'textos': ['"Plus Jakarta Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'verde-padrao': '#053F02',
        'borda': '#5B665F',
        'fundo-tela': '#F5F5F5',
        'verde-integrantes': '#5B665F',
        'cinzaD9': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

