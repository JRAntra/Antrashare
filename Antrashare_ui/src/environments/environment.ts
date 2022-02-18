// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  idleTimeInSeconds: 600,
};

export const baseUrl = 'http://localhost:4231/api/';

export const loginApiUrl = 'login/';
export const newsApiUrl = 'news/';
export const registerApiUrl = 'register/createNewAccount/';
export const usersApiUrl = 'users/';

export const getProfileApiUrl = 'users/getProfile/';

export const getUsersTable = 'getAllUsers/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
