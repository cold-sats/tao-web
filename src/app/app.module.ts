import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { pages } from 'src/app/app-routing.module';
import { providers } from 'src/app/providers';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { IonicStorageModule } from '@ionic/storage';

import { BottomNavComponent } from 'src/components/bottom-nav/bottom-nav';
import { TopNavComponent } from 'src/components/top-nav/top-nav';
import { InputComponent } from 'src/components/input/input';
import { ButtonComponent } from 'src/components/button/button';
import { TextComponent } from 'src/components/text/text';
import { WrapperComponent } from 'src/components/wrapper/wrapper';
import { RowComponent } from 'src/components/row/row';
import { DividerComponent } from 'src/components/divider/divider';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopNavComponent,
    InputComponent,
    ButtonComponent,
    TextComponent,
    WrapperComponent,
    RowComponent,
    DividerComponent,
    ...pages
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    IonicStorageModule.forRoot()
  ],
  exports: [
    ...pages
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
