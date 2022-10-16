import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'tao-top-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./top-nav.scss'],
  templateUrl: './top-nav.html'
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
