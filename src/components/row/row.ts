import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'tao-row',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./row.scss'],
  template: `
    <ng-content></ng-content>
    `
})

export class RowComponent implements OnInit {

  @Input() public showDivider: boolean;

  ngOnInit() {
    //Can add behavior here in the future
  }

}
