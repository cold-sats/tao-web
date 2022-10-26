import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './dashboard.html'
})

export class DashboardPage implements OnInit {

  balances: any;
  loaded: boolean;

  constructor(
    private router: Router,
    private tao: TaoWalletProvider
  ) {}

  async ngOnInit() {
    this.loaded = false;
    try {
      this.balances = await this.tao.fetchBalances();
      this.loaded = true;
    } catch(err) {
      console.log(err)
    }
  }

}
