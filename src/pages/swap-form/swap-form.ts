import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './swap-form.html'
})

export class SwapFormPage implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean;
  type: string;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tao: TaoWalletProvider
  ) {
    this.form = this.fb.group({
      amountUsd: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.route.params.subscribe((params) => this.type = params['type']);
  }

  async swap() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    if (this.type == 'bitcoin-for-usd') {
      this.tao.swap('btc', 'usd', this.form.value.amountUsd);
    } else {
      this.tao.swap('usd', 'btc', this.form.value.amountUsd);
    }
    this.router.navigate(['dashboard']);
  }

}
