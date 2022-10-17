import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'tao-divider',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./divider.scss'],
  template: `
  <div class="divider"></div>
  `
})

export class DividerComponent implements OnInit {

  ngOnInit() {
    //Can add behavior here in the future
  }

}
