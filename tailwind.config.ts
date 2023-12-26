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
        'green-haze': {
          '50': '#f7fdfa',
          '100': '#d8f3e2',
          '200': '#b4e6ca',
          '300': '#83d2ac',
          '400': '#4fb888',
          '500': '#2c986a',
          '600': '#1e7d57',
          '700': '#186447',
          '800': '#155039',
          '900': '#124230',
          '950': '#09251b',
        },
      },
      fontFamily: {
        sans: ['Geist', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
