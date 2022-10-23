import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './address.html'
})

export class AddressPage implements OnInit {

  address: string;
  showCopiedSuccess: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => this.address = params['address']);
  }

  goToBalancePage() {
    this.router.navigate(['dashboard']);
  }

  copyAddressToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.address;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.showCopiedSuccess = true;
    return setTimeout(() => this.showCopiedSuccess = false, 2000);
  }

}
