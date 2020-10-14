// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
// import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBUDAOyM7B9VjvlBqG8xfC3MuO_pyk2mls',
    authDomain: 'swanners-development.firebaseapp.com',
    databaseURL: 'https://swanners-development.firebaseio.com',
    projectId: 'swanners-development',
    storageBucket: 'swanners-development.appspot.com',
    messagingSenderId: '383821409350',
    appId: '1:383821409350:web:bd649303a29f7719f8ee47',
  });
}

// if (['staging', 'production'].indexOf(process.env.NODE_ENV as string) >= 0) {
//   // === ON SERVER - Staging or Production ===
//   firebase.analytics();
// } else if (process.env.NODE_ENV === 'development') {
//   // === NOT ON SERVER - Dev or Test ===
//   // --- Connect to emulator ---
//   const emulatorConfig = config.extra.firebaseEmulatorConfig;
//   Firestore
//   firebase.firestore().settings({
//     host: emulatorConfig.firestore,
//     ssl: false,
//   });
//   Firebase
//   firebase.functions().useFunctionsEmulator(emulatorConfig.functions as string);
// }

export default firebase;
