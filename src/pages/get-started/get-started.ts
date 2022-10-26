import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './get-started.html'
})

export class GetStartedPage implements OnInit {

  didCopySecret: boolean;
  showCopySecretError: boolean;
  showCopiedSuccess: boolean;
  loaded: boolean;
  key: string;

  constructor(
    private router: Router,
    public storage: Storage,
    private tao: TaoWalletProvider
  ) {}

  async ngOnInit() {
    this.loaded = true;
    this.key = require('crypto').randomBytes(16).toString('hex');
    this.loaded = false;
  }

  async goToDashboardPage() {
    if (!this.didCopySecret) {
      return this.showCopySecretError = true;
    }
    const login = await this.tao.login(this.key);
    return this.router.navigate(['dashboard']);
  }

  async copyKeyToClipboard() {
    await this.storage.set('key', this.key);
    this.showCopySecretError = false;
    this.didCopySecret = true;
    const textArea = document.createElement('textarea');
    textArea.value = this.key;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.showCopiedSuccess = true;
    return setTimeout(() => this.showCopiedSuccess = false, 2000);
  }

}
