import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClientProvider  } from 'src/providers/http-client';

@Injectable()
export class TaoWalletProvider {

  constructor(
    private storage: Storage,
    private http: HttpClientProvider
  ) {}

  async login(lnMarketsSecret = '', network = 'mainnet') {
    lnMarketsSecret = require('crypto').randomBytes(16).toString('hex');
    return await fetch('http://localhost:3000/login?' + new URLSearchParams({
      lnMarketsSecret: lnMarketsSecret,
      network: network
    })).then(
      async (response) => {
        return await response.json();
      }
    );
  }

  async getLightningInvoice(amountSats = '9999', network = 'mainnet') {
    return await fetch('http://localhost:3000/lightning-invoice?' + new URLSearchParams({
      amountSats: amountSats,
      network: network
    })).then(
      async (response) => {
        return await response.json();
      }
    );
  }

}
