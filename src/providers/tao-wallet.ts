import { Injectable } from '@angular/core';

@Injectable()
export class TaoWalletProvider {

  async login(lnMarketsSecret = '', network = 'testnet') {
    lnMarketsSecret = require('crypto').randomBytes(16).toString('hex');
    const payload = {
      lnMarketsSecret: lnMarketsSecret,
      network: network
    }
    return await this.fetch('login', payload);
  }

  async fetchDepositAddress(type = 'bolt11', amountSats) {
    let payload = {
      type: type
    }
    if (amountSats) payload['amountSats'] = amountSats;
    return await this.fetch('fetch-deposit-address', payload);
  }

  async fetchBalances() {
    return await this.fetch('fetch-balances');
  }

  async swap(from = 'btc', to = 'usd', amountUsd) {
    const payload = {
      from: from,
      to: to,
      amountUsd: amountUsd
    }
    return await this.fetch('swap', payload);
  }

  async send(type = 'bolt11', address, amountSats = null) {
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
