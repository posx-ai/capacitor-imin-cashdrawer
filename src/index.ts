import { registerPlugin } from '@capacitor/core';

import type { CashDrawerPlugin } from './definitions';

// Cash drawer plugin for imin Android POS devices
// Only supports Android and Web platforms
const cashdrawer = registerPlugin<CashDrawerPlugin>('CashDrawer', {
  web: () => import('./web').then(m => new m.CashDrawerWeb()),
});

export * from './definitions';
export { cashdrawer };
