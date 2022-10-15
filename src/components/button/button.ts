import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tao-button',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.scss'],
  template: `
    <div class="wrapper">
      <button
        expand="block"
        class="'mat-raised-button'"
        mat-button
        [disabled]="disabled || isLoading"
        tappable
        (click)="executeAction()"
        type="submit" block>
        <span class="button-text">{{text}}</span>
        <span *ngIf="isLoading" class="loading-indicator">{{text}}</span>
      </button>
    </div>
  `
})

export class ButtonComponent {

  @Input() text: string;
  @Input() disabled = false;
  @Input() action = null;
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
