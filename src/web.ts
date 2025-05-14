import { WebPlugin } from '@capacitor/core';

import type { CashDrawerPlugin } from './definitions';

export class CashDrawerWeb extends WebPlugin implements CashDrawerPlugin {
  async open(): Promise<{ success: boolean }> {
    console.warn('Cash drawer not available on web');
    return { success: false };
  }

  async isOpen(): Promise<{ isOpen: boolean }> {
    console.warn('Cash drawer not available on web');
    return { isOpen: false };
  }
}
