import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LNMarketsRest } from '@ln-markets/api'

import { HttpClientProvider } from 'src/providers/http-client';

const crypto = require('crypto');
const { bech32 } = require('bech32')
const secp256k1 = require('secp256k1')
const axios = require('axios').default;

@Injectable()
export class LNMarketsProvider {

  lnmarkets: any;

  constructor(
    private httpClient: HttpClientProvider,
    private storage: Storage
  ) {}

  async login(secret = '', network = 'testnet') {
    secret = require('crypto').randomBytes(16).toString('hex');
    const cookie = await this.fetchNewCookie({ secret, network });
    console.log(cookie)
    return new LNMarketsRest({
      skipApiKey: true,
      customHeaders: { Cookie: '' }, //TODO add cookie back here
      network
    });
  }

  async fetchNewCookie({ secret, network }) {
    const host = `api${network === 'testnet' ? '.testnet' : ''}.lnmarkets.com/v1`
    console.log(host)

    //I tried pinging endpoint with axios and angular httpclient and am getting CORS error either way

    //Axios:
    //const response: any = await axios.post(`https://${host}/lnurl/auth`, { }, { headers: { 'Content-Type': 'application/json' } })
    //console.log(response)

    //Angular:
    const response: any = await this.httpClient.post(`https://${host}/lnurl/auth`);
    console.log(response)


    /*const { lnurl, k1 } = response.data
    const cookie = response.headers['set-cookie']
    const decoded = bech32.decode(lnurl, 1023)
    const httpString = new Buffer.from(bech32.fromWords(decoded.words)).toString()
    const url = new URL(httpString)
    const secretKey = crypto.createHash('sha256')
        .update(`${url.host}:${secret}`)
        .digest()
    const publicKey = secp256k1.publicKeyCreate(secretKey)
    secp256k1.publicKeyVerify(publicKey, secretKey)
    const message = Buffer.from(url.searchParams.get('k1'), 'hex')
    const { signature } = secp256k1.ecdsaSign(message, secretKey)
    const hmac = url.searchParams.get('hmac')
    const key = Buffer.from(publicKey).toString('hex')
    const sig = Buffer.from(secp256k1.signatureExport(signature)).toString('hex')
    const params = new URLSearchParams({
        key, sig, hmac, k1, tag: 'login', jwt: false
    })
    const loginResponse = await axios.get(
        `https://${host}/lnurl/auth?${params.toString()}`,
        {
            credentials: true,
            headers: { Cookie: cookie },
        }
    )
    if (loginResponse.data.status !== 'OK') {
        throw new Error('Login failed')
    }
    return cookie*/


    return '';
  }

}
