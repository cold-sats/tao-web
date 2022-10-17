import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Router } from '@angular/router';

@Component({
  selector: 'tao-top-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./top-nav.scss'],
  templateUrl: './top-nav.html'
})

export class TopNavComponent implements OnInit {

  @Input() showBackButton: boolean = false;
  @Input() title: string;
  currentPage: string;
  dashboardImageSrc: string;
  showTopNav: boolean;

  constructor(
    private responsive: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentPage = this.router.routerState.snapshot.url;
    this.responsive.observe('(min-width: 550px)')
      .subscribe(result => {
        if (result.matches) {
          this.showTopNav = true;
        } else {
          this.showTopNav = true;
        }
      });
  }

  goToPage(page) {
    console.log(this.router.routerState.snapshot.url)
    this.router.navigate([page]);
  }

}
