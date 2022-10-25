import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ButtonComponent } from 'src/components/button/button';
import { DividerComponent } from 'src/components/divider/divider';
import { InputComponent } from 'src/components/input/input';
import { NavComponent } from 'src/components/nav/nav';
import { RowComponent } from 'src/components/row/row';
import { SkeletonComponent } from 'src/components/skeleton/skeleton';
import { TextComponent } from 'src/components/text/text';
import { WrapperComponent } from 'src/components/wrapper/wrapper';

export const materialDesignComponents = [
  FormsModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  ReactiveFormsModule
];

export const taoComponents = [
  ButtonComponent,
  DividerComponent,
  InputComponent,
  NavComponent,
  RowComponent,
  SkeletonComponent,
  TextComponent,
  WrapperComponent
];
