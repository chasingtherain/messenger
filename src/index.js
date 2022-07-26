import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { MessengerContextProvider } from './contexts/MessengerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessengerContextProvider>
      <App />
    </MessengerContextProvider>
    <ToastContainer/>
  </React.StrictMode>
);