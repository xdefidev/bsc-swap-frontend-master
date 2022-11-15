import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MFAX',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x640fCe3863B299043E889Dc1089178347783DF33',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'MFAX-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xe36a268c43626277040E62A51699F5396AB3Bc0C',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
