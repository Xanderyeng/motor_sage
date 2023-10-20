import type { Config } from 'tailwindcss'

const config: Config = {
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
    },
  },
  plugins: [],
}
export default config
