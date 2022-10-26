import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './send-receive.html'
})

export class SendReceivePage {

  constructor(
    private router: Router
  ) {}

  goToPage(page) {
    this.router.navigate([page]);
  }

}
