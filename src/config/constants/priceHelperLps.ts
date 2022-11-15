import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'QSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7b3ae32eE8C532016f3E31C8941D937c59e055B9',
    },
    token: tokens.qsd,
    quoteToken: tokens.wbnb,
  },
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

export default priceHelperLps
