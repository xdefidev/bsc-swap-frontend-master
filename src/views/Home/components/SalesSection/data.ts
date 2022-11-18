import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: '',
    text: '',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      // { src: 'BNB', alt: 'BNB token' },
      { src: 'TREE', alt: 'BTC token' },
      // { src: 'MetaFlokiAvatar', alt: 'MetaFlokiAvatar token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Metaflokiavatarswap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: '',
    text: '',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'pie', alt: 'Pie chart' },
      // { src: 'stonks', alt: 'Stocks chart' },
      { src: 'METAFLOKI-Fountain', alt: 'Folder with MetaFlokiAvatar token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'MFAX Utilities',
  bodyText:
    'MFAX token is at the central of the MetaFlokiAvatarSwap ecosystem. You can win it, farm it, spend it, stake it.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x640fCe3863B299043E889Dc1089178347783DF33',
    text: 'Buy MFAX',
    external: false,
  },
  secondaryButton: {
    to: '',
    text: '',
    external: true,
  },

  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'bottom-right', alt: 'Small 3d pancake' },
      // { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'WATER-FLOKI-God', alt: 'MetaFlokiAvatar token' },
      // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
