import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x5afD356B4D36A8269275Adac6eDe7Ffbf4F2802d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '40',
    sortOrder: 1,
    isFinished: false,
  },

  // {
  //   sousId: 2,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.pha,
  //   contractAddress: {
  //     97: '',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.28',
  //   isFinished: false,
  // },
]

export default pools
