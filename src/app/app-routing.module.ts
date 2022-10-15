import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetStartedPage } from 'src/pages/get-started/get-started';
import { IntroPage } from 'src/pages/intro/intro';

export const pages = [
  GetStartedPage,
  IntroPage
];

const routes: Routes = [
  { path: 'get-started', component: GetStartedPage },
  { path: '', component: IntroPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
