import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StyleGuidePage } from 'src/pages/style-guide/style-guide';
import { IntroPage } from 'src/pages/intro/intro';

export const pages = [
  StyleGuidePage,
  IntroPage
];

const routes: Routes = [
  { path: 'style-guide', component: StyleGuidePage },
  { path: '', component: IntroPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
