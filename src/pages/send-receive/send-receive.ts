import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';

import { LNMarketsProvider } from 'src/providers/ln-markets'

@Component({
  templateUrl: './send-receive.html'
})

export class SendReceivePage implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean;
  showLoginButtons: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    public lnMarkets: LNMarketsProvider,
    public storage: Storage
  ) {
    this.form = this.fb.group({
      login: ['']
    });
  }

  ngOnInit() {

  }

}
