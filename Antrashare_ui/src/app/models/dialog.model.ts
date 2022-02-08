export interface ConfirmationConfig {
  title?: string;
  message?: string;
  
  icon?: {
    name?: string;
    color?: 'primary' | 'accent' | 'warn' | 'basic';
  };

  actions?: {
    confirm?: {
      label?: string;
      color?: 'primary' | 'accent' | 'warn';
    };
    cancel?: {
      label?: string;
    }
  }
}