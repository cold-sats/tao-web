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

  @Output() action: EventEmitter<any> = new EventEmitter();
  @Input() smallBody: string;
  @Input() body: string;
  @Input() hero: string;
  @Input() helper: string;
  @Input() header: string;
  @Input() link: string;
  @Input() error: string;
  @Input() title: string;
  cooldown = false;
  currentText = '';
  items = {
    smallBody: 'small-body',
    body: 'body',
    error: 'error',
    header: 'header',
    hero: 'hero',
    helper: 'helper',
    link: 'link',
    title: 'title'
  };
  currentClass: { [key: string]: boolean };

  constructor(
    private elementRef: ElementRef
  ) {}

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
