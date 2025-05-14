export interface CashDrawerPlugin {
  /**
   * Open the cash drawer
   * @returns Promise resolving to an object with success property
   */
  open(): Promise<{ success: boolean }>;

  /**
   * Get cash drawer status
   * @returns Promise resolving to an object with isOpen property
   */
  getStatus(): Promise<{ isOpen: boolean }>;
}
