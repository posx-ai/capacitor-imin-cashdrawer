import { WebPlugin } from '@capacitor/core';

import type { cashdrawerPlugin } from './definitions';

export class cashdrawerWeb extends WebPlugin implements cashdrawerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
