import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { pages } from 'src/app/app-routing.module';
import { providers } from 'src/app/providers';
import { taoComponents, materialDesignComponents } from 'src/app/components';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    AppComponent,
    ...taoComponents,
    ...pages
  ],
  imports: [
    ...materialDesignComponents,
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
