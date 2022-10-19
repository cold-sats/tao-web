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
    this.http.post('localhost:3000/test-tao-login');
  }

}
