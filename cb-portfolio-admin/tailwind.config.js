/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-bg': '#2d2e32',
        'secondary-bg': '#25262a',
        'primary-text': '#eeeef0',
        'secondary-text': '#87888c',
        'main': '#64f4ac'
      },
      fontFamily: {
        'roboto-mono': ["Roboto Mono", "monospace"],
        'dm-sans': ["DM Sans", "sans-serif"]
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 900
      },
      fontSize: {
        msm: "0.8rem"
      },
      dropShadow : {
        'glow' : [
          '0 0 .5px #64f4ac',
          '0 0 10px #64f4ac'
        ]
      }
    },
  },
  plugins: [],
}

