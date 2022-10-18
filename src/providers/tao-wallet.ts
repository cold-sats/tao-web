import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const TaoWallet = require('tao-wallet');

@Injectable()
export class TaoWalletProvider {

  constructor(
    private storage: Storage
  ) {}

  async login(secret = '', network = 'testnet') {
    const lnmSecret = require('crypto').randomBytes(16).toString('hex');
    const tao = new TaoWallet({ lnmSecret, network: network });
    await tao.login();
  }

}
