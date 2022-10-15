import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss']
})

export class IntroPage implements OnInit {

  showLoginButtons: boolean;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    const video = document.getElementById("video") as HTMLVideoElement;
    video.muted = true;
    video.play();
    setTimeout(() => this.showLoginButtons = true, 3300);
  }

  goToGetStartedPage() {
    this.router.navigate(['get-started']);
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }

}
