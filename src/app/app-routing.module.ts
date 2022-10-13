import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetStartedPage } from 'src/pages/get-started/get-started';

export const pages = [
  GetStartedPage
];

const routes: Routes = [
  { path: 'get-started', component: GetStartedPage },
  { path: '', component: GetStartedPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
