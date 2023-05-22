import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const {
  VITE_APP_DB_URL,
  VITE_APP_FIREBASE_API_KEY,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  appId: VITE_APP_FIREBASE_APP_ID,
  databaseURL: VITE_APP_DB_URL,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
