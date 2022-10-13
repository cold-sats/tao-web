import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  ElementRef,
  ViewChild,
  AfterViewInit,
  SimpleChange
} from '@angular/core';
import { Form, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from 'src/components/input/value-accessor';

@Component({
  selector: 'tao-input',
  templateUrl: 'input.html',
  styleUrls: ['./input.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true,
  }],
})

export class InputComponent extends ValueAccessorBase<any> implements OnChanges, AfterViewInit {

  @ViewChild('maskedInput', {static: false}) maskedInputRef: ElementRef;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public icon: string;
  @Input() public activeIcon: string;
  @Input() public form: FormControl;
  @Input() public formControlName: any;
  @Input() public formControl: any;
  @Input() customMask: any;
  @Input() public mask: string;
  @Input() public submitted: boolean;
  @Input() public errorMessage: string;
  @Input() public noBorder: boolean;
  @Input() public inputMode: string;
  @Input() unmask: boolean;
  actionLoading: boolean;
  showSideButton: boolean = false;

  focused = false;
  touchedState = false;
  inputMask: any;
  showCurrencyCharacter = false;
  isInputEmpty = true;

  ngAfterViewInit() {
    if (this.inputMask) {
      const keyupNativeEvent = new Event('keyup');
      setTimeout(_ => {
        // To show input masked on the reload of the page
        this.maskedInputRef.nativeElement.dispatchEvent(keyupNativeEvent);
        // call blur() to prevent input focus on ios devices
        this.maskedInputRef.nativeElement.blur();
      }, 0);
    }
  }

  keyUpHandle(event) {
    this.isInputEmpty = event.target.value === '';
  }

  getMask(maskType: string) {
    const masks = {
      currencyMask: {
        lazy: true,
        mask: '$num',
        blocks: {
          num: {
            mask: Number,
            scale: 2,
            signed: false,
            thousandsSeparator: ',',
            padFractionalZeros: true,
            normalizeZeros: true,
            radix: '.',
            mapToRadix: ['.']
          }
        }
      },
      number: {
        lazy: false,
        mask: 'num',
        blocks: {
          num: {
            mask: Number,
          }
        }
      }
    };
    return masks[maskType];
  }

  ngOnChanges(changes: { customMask?: SimpleChange, mask?: SimpleChange }) {
    if (changes.customMask) {
      this.inputMask = this.customMask;
    }
    if (changes.mask) {
      this.inputMask = this.getMask(this.mask);
    }
  }

  setFocused(status) {
    this.focused = status;
  }

  changeTouch = () => {
    this.touchedState = true;
  }

}
