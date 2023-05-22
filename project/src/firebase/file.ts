import { push, ref, set } from 'firebase/database';
import database from './database';

const trigger = (name: string, contact: string) => {
  const registerListRef = ref(database, 'registers');
  const newRegisterRef = push(registerListRef);
  const current = new Date();
  return set(newRegisterRef, {
    time: `${current.toLocaleTimeString()} - ${current.toLocaleDateString()}`,
    name,
    contact,
  });
};

export default trigger;
