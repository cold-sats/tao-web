import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'bottom-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bottom-nav.scss'],
  templateUrl: './bottom-nav.html'
})

export class BottomNavComponent implements OnInit {

  @Input() hasBottomNav: boolean = false;

  constructor(
    private responsive: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.responsive.observe('(min-width: 550px)')
      .subscribe(result => {
        if (result.matches) {
          this.hasBottomNav = true;
        } else {
          this.hasBottomNav = false;
        }
      });
  }

}
