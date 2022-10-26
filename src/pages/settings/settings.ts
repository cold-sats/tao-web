import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: './settings.html'
})

export class SettingsPage implements OnInit {

  key: string;
  showCopiedSuccess: boolean;

  constructor(
    private router: Router,
    public storage: Storage
  ) {}

  async ngOnInit() {
    this.key = await this.storage.get('key');
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['']);
  }

  async copyKeyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.key;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.showCopiedSuccess = true;
    return setTimeout(() => this.showCopiedSuccess = false, 2000);
  }

}
