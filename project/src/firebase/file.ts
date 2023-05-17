import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import storage from './storage';

const trigger = (name: string, contact: string) => {
  const fileRef = ref(storage, 'register.csv');
  return getDownloadURL(fileRef)
    .then(url => {
      fetch(url).then(res => {
        res.text().then(text => {
          let append = `${new Date().toLocaleDateString()},${name},${contact}`;
          append = `${text}
${append}`;
          uploadString(fileRef, append);
        });
      });
    })
    .catch(error => {
      console.error('Get Download URL error: ', error);
    });
};

export default trigger;
