// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyCG-ouTCkDZxR8NWvE5dvQ20dUJl1ieLBQ",
    authDomain: "gamarra-e89b4.firebaseapp.com",
    databaseURL: "https://gamarra-e89b4.firebaseio.com",
    projectId: "gamarra-e89b4",
    storageBucket: "gamarra-e89b4.appspot.com",
    messagingSenderId: "218928794127"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
