import { useState } from 'react';
import './App.css';
import Notification, { NotificationContext } from './core/components/Notification';
import { Home } from './pages';

function App() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  const updateShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <NotificationContext.Provider
      value={{ show, updateShow, content, setContent, success, setSuccess }}
    >
      <Home />
      <Notification />
    </NotificationContext.Provider>
  );
}

export default App;
