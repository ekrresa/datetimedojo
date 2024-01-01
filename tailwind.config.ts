import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Geist', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-react-aria-components')],
}
export default config
