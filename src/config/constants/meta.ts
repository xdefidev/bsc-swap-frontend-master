import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MetaFlokiAvatarSwap')}`,
      }
    default:
      return null
  }
}
