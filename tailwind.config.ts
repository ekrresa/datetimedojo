import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          '50': '#fef2f2',
          '100': '#fde7e6',
          '200': '#fbd0d2',
          '300': '#f8a9ad',
          '400': '#f37981',
          '500': '#e94a58',
          '600': '#d52941',
          '700': '#b31d35',
          '800': '#961b33',
          '900': '#811a32',
          '950': '#480916',
        },
        pearl: '#12202a',
        charcoal: '#0c1821',
        desert: {
          '50': '#f7f7f6',
          '100': '#f0f0ee',
          '200': '#ddddda',
          '300': '#c0bfb9',
          '400': '#9e9d92',
          '500': '#828175',
          '600': '#6a6a5f',
          '700': '#57574d',
          '800': '#4a4a42',
          '900': '#40403a',
          '950': '#2a2a27',
        },
        opium: {
          '50': '#f9f6f7',
          '100': '#f4eff0',
          '200': '#eae0e2',
          '300': '#d9c8ca',
          '400': '#c0a6a9',
          '500': '#ab898c',
          '600': '#8d696a',
          '700': '#7c5a5a',
          '800': '#684d4c',
          '900': '#584443',
          '950': '#332424',
        },
      },
      fontFamily: {
        sans: ['Geist', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-react-aria-components')],
}
export default config
