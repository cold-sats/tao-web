import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Router } from '@angular/router';

@Component({
  selector: 'tao-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nav.scss'],
  templateUrl: './nav.html'
})

export class NavComponent implements OnInit {

  @Input() showBackButton: boolean = false;
  @Input() title: string;
  @Input() hideMenuButtons: string;
  currentPage: string;
  navLocation: string;

  constructor(
    private responsive: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentPage = this.router.routerState.snapshot.url;
    this.responsive.observe('(min-width: 650px)')
      .subscribe(result => {
        if (result.matches) {
          this.navLocation = 'top';
        } else {
          this.navLocation = 'bottom';
        }
      });
  }

  goToPage(page) {
    this.router.navigate([page]);
  }

}
