import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})

export class MenuComponent {

  constructor(
    public router: Router,
    private storage: Storage
  ) {}

  goTopage(chart) {
    this.router.navigate(['']);
  }

}
