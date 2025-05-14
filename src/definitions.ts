export interface cashdrawerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
