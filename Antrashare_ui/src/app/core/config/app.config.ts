import { ThemeType } from "src/app/models/theme.model";

export const APP_CONFIG = {
  admin: 'admin',

  defaultIdleStatus: {
    idleTime: 10 * 60,  // 10 minutes
    timeoutTime: 10     // 10 seconds
  },
  defaultStory: {
    numImages: 1,
    numVideos: 1,
    pageSize: 3
  },
  defaultTheme: ThemeType.Dark,

  localStorage: {
    prefix: 'TBD-',     // Team Best DEVs
    theme: 'theme',
    idle: 'idle',
    token: 'bearerToken'
  },

}