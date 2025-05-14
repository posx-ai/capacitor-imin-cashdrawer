export interface CashDrawerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
