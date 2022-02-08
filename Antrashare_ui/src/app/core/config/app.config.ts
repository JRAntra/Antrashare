import { ThemeType } from "src/app/models/theme.model";

export const APP_CONFIG = {
  defaultIdleStatus: {
    idleTime: 10 * 60, // 10 minutes
    timeoutTime: 10 // 10 seconds
  },
  defaultTheme: ThemeType.Dark,

  localStorage: {
    prefix: 'TBD-', // Team Best DEVs
    theme: 'theme',
    idle: 'idle',
    token: 'bearerToken'
  },

}