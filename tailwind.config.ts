/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1400px',
          'custom-1366': '1300px',
          // Wide Screens - 1920px and above
          '2xl': '1536px'
        },
      },
      colors: {
        'btn': "#F45C5D",
      },
      dropShadow: {
        'headingTextShadow': '3px 3px 3px rgba(0, 0, 0, 0.19)'
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inknut: ["Inknut Antiqua", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        astro: ["a Astro Space", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}
// export default config
