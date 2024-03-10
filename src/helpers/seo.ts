import { NextSeoProps } from 'next-seo'

export const SEO: NextSeoProps = {
  title: 'DateTime Dojo',
  description: 'Convert dates into different formats',
  canonical: 'https://datetimedojo.com',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    site_name: 'DateTime Dojo',
    description: 'Convert dates into different formats',
    url: 'https://datetimedojo.com',
    images: [
      {
        url: 'https://res.cloudinary.com/chuck-huey/image/upload/c_scale,dpr_auto,w_auto,q_auto,f_auto/v1710096874/personal/datetimedojo-og_rp2w3h.png',
        width: 1200,
        height: 600,
        alt: 'DateTime Dojo',
      },
    ],
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
