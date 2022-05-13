/**
 * 1. Create a new firebase  project in console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth to export auth.
 * 4. firebase setting> authentication> enable email and password auth
 * 5. create login, signup component, setup route
 * 6. attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks 
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks 
 * 9. if user is created redirect to the expected page
 * 10. useSignInWithEmailAndPassword for login
 * 11. create require auth ==> check user exist and also user location
 * 12. In route wrap protected components by using require auth component
 */


/**
 * Firebase Hosting steps:
 * 1. npm install -g firebase-tools(one time for your computer)
 * 2. firebase login (one time for your computer)
 * 3. firebase init (one time for each project )
 * 4. npm run build (every time u want to deploy)
 * 5. firebase deploy (every time u want to deploy)
*/