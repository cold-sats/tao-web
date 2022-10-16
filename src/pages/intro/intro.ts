import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LNMarketsProvider } from 'src/providers/ln-markets'

@Component({
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss']
})

export class IntroPage implements OnInit {

  showLoginButtons: boolean;

  constructor(
    public router: Router,
    public lnMarkets: LNMarketsProvider
  ) {}

  ngOnInit() {
    const video = document.getElementById("video") as HTMLVideoElement;
    video.muted = true;
    video.play();
    setTimeout(() => this.showLoginButtons = true, 3300);
  }

  goToGetStartedPage() {
    this.router.navigate(['style-guide']);
  }

  async goToLoginPage() {
    const test = await this.lnMarkets.login();
    console.log(test)
  }

}
