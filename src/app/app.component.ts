import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { HttpClientProvider  } from 'src/providers/http-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  loaded: boolean;

  constructor(
    private router: Router
  ) {}

  async ngOnInit() {
    this.loaded = false;
    try {
      if (this.router.url == '/') {
        const hasSecret = false //TODO
        const path = hasSecret ? [''] : ['get-started'];
        this.router.navigate(path);
      }
    } catch(err) {
      console.log(err)
    }
    this.loaded = true;
  }

}
