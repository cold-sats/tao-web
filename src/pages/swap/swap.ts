import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './swap.html'
})

export class SwapPage {

  constructor(
    private router: Router
  ) {}

  goToPage(type) {
    this.router.navigate([`swap/${type}`]);
  }

}
