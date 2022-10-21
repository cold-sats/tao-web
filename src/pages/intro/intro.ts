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
    private tao: TaoWalletProvider
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
    await this.testTaoEndpoints();
    //TODO
  }

  async testTaoEndpoints() {
    const login = await this.tao.login();
    console.log(login);
    const type = 'bolt11';
    const amountSats = 10000;
    const depositAddress = await this.tao.fetchDepositAddress(type, amountSats);
    console.log(depositAddress);
    const balances = await this.tao.fetchBalances();
    console.log(balances);
  }

}
