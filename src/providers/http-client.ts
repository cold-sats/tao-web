import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Storage } from '@ionic/storage';

import { timeout } from 'rxjs/operators';

@Injectable()
export class HttpClientProvider {

  constructor(
    private http: HttpClient,
  ) {}

  get(url) {
    this.request('GET', url);
  }

  post(url, data = {}) {
    this.request('POST', url, data);
  }

  put(url, data = {}) {
    this.request('PUT', url, data);
  }

  delete(url, data = {}) {
    this.request('DELETE', url, data);
  }

  request(method, url, data = {}) {
    return this.http
      .request(method, url, this.payload(data, method))
      .pipe(
        timeout(20000)
      ).toPromise()
      .catch( error => this.onError(error, url, data) );
  }

  header(): HttpHeaders {
    const headers = {
      'Content-Type': 'application/json'
    };
    const httpHeaders = new HttpHeaders(headers);
    return httpHeaders;
  }

  payload(data: any, method: string) {
    return {
      headers: this.header(),
      body: JSON.stringify(data, (k, v) => v === undefined ? null : v),
    }
  }

  onError(error, url, data) {
    console.log(error)
    if (error?.error) {
      const apiError = error.error;
      if (apiError.error) {
        return Promise.reject({ code: apiError.error.code, message: apiError.error.message, err : apiError });
      }
      return Promise.reject(apiError);
    }
    return Promise.reject(error);
  }

}
