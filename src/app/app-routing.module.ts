import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from 'src/pages/dashboard/dashboard';
import { IntroPage } from 'src/pages/intro/intro';
import { StyleGuidePage } from 'src/pages/style-guide/style-guide';
import { SendReceivePage } from 'src/pages/send-receive/send-receive';
import { SwapPage } from 'src/pages/swap/swap';
import { SettingsPage } from 'src/pages/settings/settings';
import { GetStartedPage } from 'src/pages/get-started/get-started';
import { LoginPage } from 'src/pages/login/login';
import { DepositPage } from 'src/pages/deposit/deposit';
import { WithdrawPage } from 'src/pages/withdraw/withdraw';

export const pages = [
  DashboardPage,
  IntroPage,
  StyleGuidePage,
  SendReceivePage,
  SwapPage,
  SettingsPage,
  GetStartedPage,
  LoginPage,
  DepositPage,
  WithdrawPage
];

const routes: Routes = [
  { path: 'style-guide', component: StyleGuidePage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'send-receive', component: SendReceivePage },
  { path: 'swap', component: SwapPage },
  { path: 'settings', component: SettingsPage },
  { path: 'get-started', component: GetStartedPage },
  { path: 'login', component: LoginPage },
  { path: 'deposit', component: DepositPage },
  { path: 'withdraw', component: WithdrawPage },
  { path: '', component: IntroPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}