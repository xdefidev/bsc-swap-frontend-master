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
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
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
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'pie', alt: 'Pie chart' },
      // { src: 'stonks', alt: 'Stocks chart' },
      { src: 'meta-logo', alt: 'Folder with MetaFlokiAvatar token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'MetaFlokiAvatars makes our world go round.',
  bodyText:
    'MetaFlokiAvatar token is at the heart of the MetaFlokiAvatarSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x640fCe3863B299043E889Dc1089178347783DF33',
    text: 'Buy MetaFlokiAvatar',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/MetaFlokiAvatar',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'bottom-right', alt: 'Small 3d pancake' },
      // { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'Metafloki-coin', alt: 'MetaFlokiAvatar token' },
      // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
