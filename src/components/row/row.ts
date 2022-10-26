import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tao-row',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./row.scss'],
  template: `
    <ng-content></ng-content>
    `
})

export class RowComponent {

}
