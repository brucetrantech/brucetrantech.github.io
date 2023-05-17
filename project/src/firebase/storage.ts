import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCeUxegAQ61tiMQtXp9ni7botIhyalwC3U',
  authDomain: 'test-project-8155a.firebaseapp.com',
  projectId: 'test-project-8155a',
  storageBucket: 'test-project-8155a.appspot.com',
  messagingSenderId: '96084632417',
  appId: '1:96084632417:web:3eb5d1558a8a82ac045b20',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
