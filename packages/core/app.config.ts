const appConfig = {
  name: 'Swanners',
  version: '0.0.1',
  extra: {
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    firebaseEmulatorConfig: {
      functions: process.env.EMULATOR_FUNCTIONS,
      firestore: process.env.EMULATOR_FIRESTORE,
    },
    firebaseLocation: process.env.FIREBASE_LOCATION,
  },
};

export default appConfig;
