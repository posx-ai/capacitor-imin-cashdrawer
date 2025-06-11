import { WebPlugin } from '@capacitor/core';

import type { CashDrawerPlugin } from './definitions';

export class CashDrawerWeb extends WebPlugin implements CashDrawerPlugin {
  async open(): Promise<{ success: boolean }> {
    console.warn('Cash drawer is only available on imin Android POS devices');
    return { success: false };
  }

  async isOpen(): Promise<{ isOpen: boolean }> {
    console.warn('Cash drawer is only available on imin Android POS devices');
    return { isOpen: false };
  }
}
