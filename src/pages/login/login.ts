import { Component, NgModule } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TaoWalletProvider } from 'src/providers/tao-wallet'

@Component({
  templateUrl: './login.html'
})

export class LoginPage {

  submitted: boolean;
  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private storage: Storage,
    private tao: TaoWalletProvider
  ) {
    this.form = this.fb.group({
      key: ['', Validators.required]
    });
  }

  async login() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    try {
      const login = await this.tao.login(this.form.value.key);
      await this.storage.set('key', this.form.value.key);
      return this.router.navigate(['dashboard']);
    } catch(err) {
      return console.log(err);
    }
  }

}
