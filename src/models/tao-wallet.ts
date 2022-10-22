export interface LoginModel {
  lnmSecret: string;
  lnmarkets: {
    customHeaders: {
      Cookie: string[];
    }
    hostname: string;
    network: string;
    skipApiKey: boolean;
    version: string;
  }
  network: string;
}

export interface BalancesModel {
  balanceBtc: number;
  balanceUsd:  number;
  btcEquivalent: string;
  usdEquivalent: string;
}
