import { registerPlugin } from '@capacitor/core';

import type { CashDrawerPlugin } from './definitions';

const cashdrawer = registerPlugin<CashDrawerPlugin>('cashdrawer', {
  web: () => import('./web').then((m) => new m.CashDrawerWeb()),
});

export * from './definitions';
export { cashdrawer };
