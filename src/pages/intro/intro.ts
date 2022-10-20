import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss']
})

export class IntroPage implements OnInit {

  showLoginButtons: boolean;

  constructor(
    public router: Router,
    private taoWallet: TaoWalletProvider
  ) {}

  ngOnInit() {
    const video = document.getElementById("video") as HTMLVideoElement;
    video.muted = true;
    video.play();
    setTimeout(() => this.showLoginButtons = true, 3300);
  }

  goToGetStartedPage() {
    this.router.navigate(['dashboard']);
  }

  async goToLoginPage() {
    const login = await this.taoWallet.login();
    console.log(login);
    const getLightningInvoice = await this.taoWallet.getLightningInvoice();
    console.log(getLightningInvoice);
  }

}
