/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Utiliser les classes pour le mode sombre
  theme: {
    extend: {
      fontFamily: {
        display: ['Katahdin Round', 'sans-serif'],
      },
      colors: {
        brightOrange: '#FF9F1C',
        lightOrange: '#FFBF69',
        mutedPink: '#CB997E',
        palePeach: '#FFE8D6',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#FF9F1C',
          'secondary': '#FFBF69',
          'accent': '#CB997E',
          'neutral': '#3D4451',
          'base-100': '#FFE8D6',
          'info': '#2094F3',
          'success': '#009485',
          'warning': '#FF9900',
          'error': '#FF5724',
        },
      },
      {
        dark: {
          'primary': '#635985',
          'secondary': '#443C68',
          'accent': '#393053',
          'neutral': '#1F2937', // Un ton plus sombre pour le mode sombre
          'base-100': '#18122B', // Fond sombre
          'info': '#2094F3',
          'success': '#009485',
          'warning': '#FF9900',
          'error': '#FF5724',
        },
      },
      "cupcake",
    ],
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
}
