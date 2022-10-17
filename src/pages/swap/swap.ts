import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';

import { LNMarketsProvider } from 'src/providers/ln-markets'

@Component({
  templateUrl: './swap.html'
})

export class SwapPage implements OnInit {

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
