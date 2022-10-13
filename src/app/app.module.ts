import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { pages } from 'src/app/app-routing.module';
import { providers } from 'src/app/providers';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { IonicStorageModule } from '@ionic/storage';

import { MenuComponent } from 'src/components/menu/menu';
import { InputComponent } from 'src/components/input/input';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputComponent,
    ...pages
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    IonicStorageModule.forRoot()
  ],
  exports: [
    MenuComponent,
    InputComponent,
    ...pages
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
