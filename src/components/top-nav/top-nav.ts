import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'tao-top-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./top-nav.scss'],
  template: `
  <img src="assets/images/tao-t-black.svg" style="height: 30px; margin-bottom: -50px; padding: 8px 5px 0px 12px">
  <div style="background: black; width: 100%; height: 50px"></div>
  <a [ngClass]="showBackButton ? '' : 'dont-display'" style="cursor: pointer; padding-right:380px; display: block; text-align: center; margin-top: 30px"><img style="height: 25px; width:25px" src="assets/images/icons/left-arrow-white.svg"></a>
  <div style="display: block; text-align: center; margin-top: -17px">
    <tao-text
      *ngIf="title"
      [title]="title">
    </tao-text>
  </div>
  `
})

export class TopNavComponent implements OnInit {

  @Input() showBackButton: boolean = true;
  @Input() title: string;
  showTopNav: boolean;

  constructor(
    private responsive: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.responsive.observe('(min-width: 550px)')
      .subscribe(result => {
        if (result.matches) {
          this.showTopNav = true;
        } else {
          this.showTopNav = true;
        }
      });
  }

}
