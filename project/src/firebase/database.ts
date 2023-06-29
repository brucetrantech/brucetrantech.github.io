import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { d } from '../utils/helper';

const {
  VITE_APP_DB_URL,
  VITE_APP_FIREBASE_API_KEY,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: d(VITE_APP_FIREBASE_API_KEY, 5),
  authDomain: d(VITE_APP_FIREBASE_AUTH_DOMAIN, 4),
  projectId: d(VITE_APP_FIREBASE_PROJECT_ID, 7),
  appId: d(VITE_APP_FIREBASE_APP_ID, 8),
  databaseURL: d(VITE_APP_DB_URL, 3),
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
