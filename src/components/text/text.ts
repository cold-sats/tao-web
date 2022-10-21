import {Component, ViewEncapsulation, Input, OnInit, OnChanges, Output, EventEmitter, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'tao-text',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./text.scss'],
  template: `
    <ng-container *ngIf="action.observers.length > 0">
      <a
        href="#"
        (click)="executeAction($event)"
        [ngClass]="currentClass">
        {{currentText}}
      </a>
    </ng-container>
    <span
      *ngIf="action.observers.length === 0"
      [innerHTML]="currentText"
      [ngClass]="currentClass">
    </span>
  `
})

export class TextComponent implements OnInit, OnChanges {

  @Input() body: string;
  @Input() helper: string;
  @Input() header: string;
  @Input() title: string;
  @Input() hero: string;
  @Input() link: string;

  @Output() action: EventEmitter<any> = new EventEmitter();
  cooldown = false;

  constructor(
    private elementRef: ElementRef
  ) {}

  currentText = '';
  items = {
    body: 'body',
    header: 'header',
    title: 'title',
    hero: 'hero',
    helper: 'helper',
    link: 'link'
  };
  currentClass: { [key: string]: boolean };

  ngOnInit() {
    this.setText();
  }

  ngOnChanges() {
    this.setText();
  }

  setText() {
    const textType = Object.keys(this).filter(i => this.items[i.toString()]);
    if (textType.length) {
      const text = textType[0];
      this.currentClass = this.items[text];
      this.currentText = this[text];
    }
  }

  executeAction(event: Event) {
    event.preventDefault();
    if (this.cooldown) return;
    this.cooldown = true;
    setTimeout(() => this.cooldown = false, 500);
    this.action.emit();
  }

}
