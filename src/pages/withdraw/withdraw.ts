import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './withdraw.html'
})

export class WithdrawPage  {

  form: UntypedFormGroup;
  submitted: boolean;
  type: string;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private tao: TaoWalletProvider
  ) {
    this.form = this.fb.group({
      amountSats: [''],
      address: ['', Validators.required]
    });
  }

  selectType(type) {
    this.type = type;
    if (type == 'on-chain') {
      this.form.controls['amountSats'].setValidators([Validators.required]);
    } else {
      this.form.controls['amountSats'].clearValidators();
      this.form.controls['amountSats'].updateValueAndValidity();
    }
  }

  async sendBitcoin() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    if (this.type == 'on-chain') {
      await this.tao.send(this.type, this.form.value.address, this.form.value.amountSats);
    } else {
      await this.tao.send(this.type, this.form.value.address);
    }
    this.router.navigate(['dashboard']);
  }

}
