import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';

import { LNMarketsProvider } from 'src/providers/ln-markets'

@Component({
  selector: 'get-started',
  templateUrl: './get-started.html',
  styleUrls: ['./get-started.scss']
})

export class GetStartedPage {

  form: UntypedFormGroup;
  submitted: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    public lnMarkets: LNMarketsProvider,
    public storage: Storage
  ) {
    this.form = this.fb.group({
      login: ['']
    });
  }

  ngOnInIt() {
    console.log('test')
  }

  async test() {
    const test = await this.lnMarkets.login();
    console.log(test)
  }

}
