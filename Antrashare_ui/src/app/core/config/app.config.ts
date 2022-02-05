import { ThemeType } from "src/app/models/theme.model";

export const APP_CONFIG = {
  defaultIdleStatus: {
    idleTime: 10 * 60,
    timeoutTime: 10
  },
  defaultTheme: ThemeType.Dark,

  localStorage: {
    prefix: 'TBD-', // Team Best DEVs
    theme: 'theme',
    idle: 'idle'
  },

}