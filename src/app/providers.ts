import { LNMarketsProvider } from 'src/providers/ln-markets';
import { HttpClientProvider  } from 'src/providers/http-client';
import { UntypedFormBuilder } from '@angular/forms';

export const providers = [
  LNMarketsProvider,
  HttpClientProvider,
  UntypedFormBuilder
];
