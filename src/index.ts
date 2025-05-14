import { registerPlugin } from '@capacitor/core';

import type { cashdrawerPlugin } from './definitions';

const cashdrawer = registerPlugin<cashdrawerPlugin>('cashdrawer', {
  web: () => import('./web').then((m) => new m.cashdrawerWeb()),
});

export * from './definitions';
export { cashdrawer };
