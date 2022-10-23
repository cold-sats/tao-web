import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './dashboard.html'
})

export class DashboardPage implements OnInit {

  balances: any;
  form: UntypedFormGroup;
  submitted: boolean;
  showLoginButtons: boolean;
  loaded: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    public storage: Storage,
    private tao: TaoWalletProvider
  ) {
    this.form = this.fb.group({
      login: ['']
    });
  }

  async ngOnInit() {
    this.loaded = false;
    try {
      /*const type = 'bolt11';
      const amountSats = 10000;
      const depositAddress = await this.tao.fetchDepositAddress(type, amountSats);
      console.log(depositAddress);*/
      this.balances = await this.tao.fetchBalances();
      this.loaded = true;
    } catch(err) {
      console.log(err)
    }
  }

  goToStyleGuidePage() {
    this.router.navigate(['style-guide']);
  }

  goToTelegram() {
    //TODO
  }

}
