import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tao-button',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.scss'],
  template: `
    <div class="wrapper">
      <button
        expand="block"
        mat-button
        [disabled]="disabled || isLoading"
        (click)="executeAction()">
        <span
          *ngIf="!isLoading"
          class="text">
          {{text}}
        </span>
        <div
          *ngIf="isLoading"
          class="loader">
        </div>
      </button>
    </div>
  `
})

export class ButtonComponent {

  @Input() action = null;
  @Input() disabled = false;
  @Input() text: string;
  isLoading: boolean;

  async executeAction() {
    if (this.isLoading || !this.action) {
      return;
    }
    try {
      this.isLoading = true;
      await this.action();
    } catch (error) {
      await this.showError(error);
    } finally {
      this.isLoading = false;
    }
  }

  showError(error) {
    //TODO
  }

}
