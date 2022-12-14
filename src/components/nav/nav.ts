import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'tao-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nav.scss'],
  templateUrl: './nav.html'
})

export class NavComponent implements OnInit {

  @Input() hideMenuButtons: string;
  @Input() showBackButton: boolean = false;
  @Input() title: string;
  currentPage: string;
  navLocation: string;

  constructor(
    private location: Location,
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

  goBack() {
    this.location.back()
  }

}
