import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClientProvider  } from 'src/providers/http-client';

@Injectable()
export class TaoWalletProvider {

  constructor(
    private storage: Storage,
    private http: HttpClientProvider
  ) {}

  async login(secret = '', network = 'testnet') {
    const test = await this.http.get('http://localhost:3000/test');
    console.log(test);
    const depositAddress = await this.http.get('http://localhost:3000/deposit-address');
    console.log(depositAddress);
  }

}
