import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from 'src/pages/dashboard/dashboard';
import { IntroPage } from 'src/pages/intro/intro';
import { StyleGuidePage } from 'src/pages/style-guide/style-guide';
import { SendReceivePage } from 'src/pages/send-receive/send-receive';
import { SwapPage } from 'src/pages/swap/swap';
import { SettingsPage } from 'src/pages/settings/settings';

export const pages = [
  DashboardPage,
  IntroPage,
  StyleGuidePage,
  SendReceivePage,
  SwapPage,
  SettingsPage
];

const routes: Routes = [
  { path: 'style-guide', component: StyleGuidePage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'send-receive', component: SendReceivePage },
  { path: 'swap', component: SwapPage },
  { path: 'settings', component: SettingsPage },
  { path: '', component: IntroPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
