import { TaoWalletProvider } from 'src/providers/tao-wallet';
import { UntypedFormBuilder } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpClientProvider  } from 'src/providers/http-client';

export const providers = [
  TaoWalletProvider,
  UntypedFormBuilder,
  HttpClient,
  HttpClientProvider
];
