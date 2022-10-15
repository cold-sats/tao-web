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
import { ButtonComponent } from 'src/components/button/button';
import { TextComponent } from 'src/components/text/text';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputComponent,
    ButtonComponent,
    TextComponent,
    ...pages
  ],
  imports: [
    FormsModule,
    HttpClientModule,
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
