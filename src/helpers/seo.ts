import { NextSeoProps } from 'next-seo'

export const SEO: NextSeoProps = {
  title: 'DateTime Dojo',
  description: 'Convert dates into different formats',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    site_name: 'DateTime Dojo',
    description: 'Convert dates into different formats',
    url: 'https://datetimedojo.com',
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'date,time,convert dates online,calendar,time converter,online date formatting,date converter,date time converter, date string converter,date time conversion tool,date format converter,date format switcher',
    },
  ],
  twitter: {
    cardType: 'summary',
  },
  robotsProps: {
    noarchive: true,
  },
  nofollow: false,
  noindex: false,
}
