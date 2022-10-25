import { Component, Input, ViewEncapsulation, ViewChild, SimpleChange } from '@angular/core';
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

export class InputComponent extends ValueAccessorBase<any> {

  @Input() public label: string;
  @Input() public icon: string;
  @Input() public form: FormControl;
  @Input() public submitted: boolean;
  @Input() public errorMessage: string;

}
