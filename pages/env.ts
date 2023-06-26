type ChainElem = {
  chainName: String;
  chainID: Number;
  swapSpender: String;
  multiSendSpender: String;
  l1GasContract: String;
  nativeToken: String;
  RPC_URL: String;
};

export class Chain {
  chain: ChainElem;

  constructor(chain: ChainElem) {
    this.chain = chain;
  }
}

// const bscChain: any = new ChainElem("bsc", 56,
//                                 "BNB",
//                                 "https://bsc-dataseed3.binance.org/",
//                                 "0x051DC16b2ECB366984d1074dCC07c342a9463999",
//                                 "0xFB6BD0C00Bd348125A1F6eDc36e4B7ff5DbdDFBa",
//                                 null);

// const bscChain: ChainElem = {chainName:"bsc", chainID: 56,
//                                 nativeToken: "BNB",
//                                 swapSpender: "https://bsc-dataseed3.binance.org/",
//                                 multiSendSpender: "0x051DC16b2ECB366984d1074dCC07c342a9463999",
//                                 l1GasContract:  "0xFB6BD0C00Bd348125A1F6eDc36e4B7ff5DbdDFBa",
//                                 RPC_URL: null};

export const CHAINS = {
  bsc: {
    chainName: "bsc",
    chainID: 56,
    nativeToken: "BNB",
    RPC_URL: "https://bsc-dataseed3.binance.org/",
    swapSpender: "0x051DC16b2ECB366984d1074dCC07c342a9463999",
    multiSendSpender: "0xFB6BD0C00Bd348125A1F6eDc36e4B7ff5DbdDFBa",
    l1GasContract: null,
  },
  eth: {
    chainName: "bsc",
    chainID: 56,
    nativeToken: "BNB",
    RPC_URL: "https://bsc-dataseed3.binance.org/",
    swapSpender: "0x051DC16b2ECB366984d1074dCC07c342a9463999",
    multiSendSpender: "0xFB6BD0C00Bd348125A1F6eDc36e4B7ff5DbdDFBa",
    l1GasContract: null,
  },
  avalanche: {
    chainName: "avalanche",
    chainID: 43114,
    nativeToken: "AVAX",
    RPC_URL: "https://avalanche-c-chain.publicnode.com",
    swapSpender: "0x8C27aBf05DE1d4847c3924566C3cBAFec6eFb42A",
    multiSendSpender: "0x864F01c5E46b0712643B956BcA607bF883e0dbC5",
    l1GasContract: null,
  },
};
// const bscChain: ChainElem = {chainName: "bsc", chainID: 56, }
