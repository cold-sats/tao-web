import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './deposit.html'
})

export class DepositPage  {

  form: UntypedFormGroup;
  submitted: boolean;
  type: string;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private tao: TaoWalletProvider
  ) {
    this.form = this.fb.group({
      amountSats: ['']
    });
  }

  selectType(type) {
    this.type = type;
    if (type == 'bolt11') {
      this.form.controls['amountSats'].setValidators([Validators.required]);
    } else {
      this.form.controls['amountSats'].clearValidators();
      this.form.controls['amountSats'].updateValueAndValidity();
    }
  }

  async fetchAddress() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    const address = this.type == 'on-chain' ?
      await this.tao.fetchDepositAddress(this.type, null) :
      await this.tao.fetchDepositAddress(this.type, this.form.value.amountSats);
    this.router.navigate([`address/${address}`], { state: { address: address } });
  }

}
