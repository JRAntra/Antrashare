// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  idleTimeInSeconds: 600,
};

/* Local host */
export const baseUrl = 'http://localhost:4231/api/';

/* Login Api */
export const loginApiUrl = 'login/';

/* NewsFeed Api */
export const newsApiUrl = 'news/';

/* Register Api */
export const registerApiUrl = 'register/';
export const createNewAccountApiUrl = 'createNewAccount/';
export const checkUserByUsernameApiUrl = 'checkExistByUsername/';
export const checkUserByEmailApiUrl = 'checkExistByEmail/';

/* Users/Profile Api */
export const usersApiUrl = 'users/';
export const getProfileApiUrl = 'getProfile/';
export const getUsersTable = 'getAllUsers/';
export const deleteUserById = 'deleteUser/';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
