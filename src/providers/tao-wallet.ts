import { Injectable } from '@angular/core';
import { LoginModel, BalancesModel } from 'src/models/tao-wallet';

@Injectable()
export class TaoWalletProvider {

  async login(lnMarketsSecret): Promise<LoginModel> {
    const payload = {
      lnMarketsSecret: lnMarketsSecret,
      network: 'mainnet'
    }
    return await this.fetch('login', payload);
  }

  async fetchDepositAddress(type, amountSats): Promise<string> {
    let payload = {
      type: type
    }
    if (amountSats) payload['amountSats'] = amountSats;
    return await this.fetch('fetch-deposit-address', payload);
  }

  async fetchBalances(): Promise<BalancesModel> {
    return await this.fetch('fetch-balances');
  }

  async swap(from, to, amountUsd) {
    const payload = {
      from: from,
      to: to,
      amountUsd: amountUsd
    }
    return await this.fetch('swap', payload);
  }

  async send(type, address, amountSats) {
    let payload = {
      type: type,
      address: address
    }
    if (amountSats) payload['amountSats'] = amountSats;
    return await this.fetch('send', payload);
  }

  async fetch(endpoint, payload = null) {
    const url = 'http://localhost:3000/' + endpoint + '?';
    return await fetch(url + new URLSearchParams(payload)).then(
      async (response) => {
        return await response.json();
      }
    );
  }

}
