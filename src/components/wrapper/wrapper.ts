import { Component, OnInit, ViewEncapsulation, Input, Renderer2, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'tao-wrapper',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wrapper.scss'],
  template: `
    <ng-content></ng-content>
  `
})

export class WrapperComponent implements OnInit {

  constructor(
    private el : ElementRef,
    private responsive: BreakpointObserver,
    private renderer : Renderer2
  ) {}

  ngOnInit() {
    this.responsive.observe('(min-width: 650px)')
      .subscribe(result => {
        if (result.matches) {
          this.renderer.addClass(this.el.nativeElement, 'desktop');
          this.renderer.removeClass(this.el.nativeElement, 'mobile');
        } else {
          this.renderer.addClass(this.el.nativeElement, 'mobile');
          this.renderer.removeClass(this.el.nativeElement, 'desktop');
        }
      });
  }

}
