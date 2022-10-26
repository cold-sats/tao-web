import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tao-skeleton',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./skeleton.scss'],
  template: `
    <div class="skeleton" [ngStyle]="styles"></div>
  `
})

export class SkeletonComponent implements OnInit {

  @Input() width: string;
  @Input() height: string;
  styles: any;

  ngOnInit() {
    this.styles = {
      'height': `${this.height}px`,
    };
    if (this.width) {
      this.styles['width'] = `${this.width}px`
    } else {
      this.styles['width'] = '100%';
    }
  }

}
