import { WebPlugin } from '@capacitor/core';

import type { CashDrawerPlugin } from './definitions';

export class CashDrawerWeb extends WebPlugin implements CashDrawerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
