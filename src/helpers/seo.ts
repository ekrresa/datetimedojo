import { NextSeoProps } from 'next-seo'

export const keywords = [
  'date',
  'time',
  'convert dates online',
  'calendar',
  'time converter',
  'online date formatting',
  'date converter',
  'date time converter',
  'date string converter',
  'date time conversion tool',
  'date format converter',
  'date format switcher',
]

export const SEO: NextSeoProps = {
  canonical: 'https://datetimedojo.com',
  additionalMetaTags: [
    {
      name: 'keywords',
      content: keywords.join(', '),
    },
  ],
}
