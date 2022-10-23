import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: './withdraw.html'
})

export class WithdrawPage implements OnInit {

  form: UntypedFormGroup;
  submitted: boolean;
  showLoginButtons: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    public storage: Storage
  ) {
    this.form = this.fb.group({
      login: ['']
    });
  }

  ngOnInit() {

  }

  goToStyleGuidePage() {
    this.router.navigate(['style-guide']);
  }

  withdraw() {
    
  }

}
