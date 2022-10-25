import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressPage } from 'src/pages/address/address';
import { DepositPage } from 'src/pages/deposit/deposit';
import { DashboardPage } from 'src/pages/dashboard/dashboard';
import { GetStartedPage } from 'src/pages/get-started/get-started';
import { IntroPage } from 'src/pages/intro/intro';
import { LoginPage } from 'src/pages/login/login';
import { StyleGuidePage } from 'src/pages/style-guide/style-guide';
import { SendReceivePage } from 'src/pages/send-receive/send-receive';
import { SwapPage } from 'src/pages/swap/swap';
import { SwapFormPage } from 'src/pages/swap-form/swap-form';
import { SettingsPage } from 'src/pages/settings/settings';
import { WithdrawPage } from 'src/pages/withdraw/withdraw';

export const pages = [
  AddressPage,
  DepositPage,
  DashboardPage,
  GetStartedPage,
  IntroPage,
  LoginPage,
  StyleGuidePage,
  SendReceivePage,
  SwapPage,
  SwapFormPage,
  SettingsPage,
  WithdrawPage
];

const routes: Routes = [
  { path: 'address/:address', component: AddressPage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'deposit', component: DepositPage },
  { path: 'get-started', component: GetStartedPage },
  { path: '', component: IntroPage },
  { path: 'login', component: LoginPage },
  { path: 'style-guide', component: StyleGuidePage },
  { path: 'send-receive', component: SendReceivePage },
  { path: 'swap', component: SwapPage },
  { path: 'swap/:type', component: SwapFormPage },
  { path: 'settings', component: SettingsPage },
  { path: 'withdraw', component: WithdrawPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
