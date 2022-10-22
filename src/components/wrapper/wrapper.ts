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

  @Input() isShowingNav = true;

  constructor(
    private el : ElementRef,
    private responsive: BreakpointObserver,
    private renderer : Renderer2
  ) {}

  ngOnInit() {
    this.responsive.observe('(min-width: 650px)')
      .subscribe(result => {
        if (result.matches) {
          const newClass = this.isShowingNav ? 'desktop' : 'desktop-no-nav';
          this.renderer.addClass(this.el.nativeElement, newClass);
          this.renderer.removeClass(this.el.nativeElement, 'mobile');
          this.renderer.removeClass(this.el.nativeElement, 'mobile-no-nav');
        } else {
          const newClass = this.isShowingNav ? 'mobile' : 'mobile-no-nav';
          this.renderer.addClass(this.el.nativeElement, newClass);
          this.renderer.removeClass(this.el.nativeElement, 'desktop');
          this.renderer.removeClass(this.el.nativeElement, 'desktop-no-nav');
        }
      });
  }

}
