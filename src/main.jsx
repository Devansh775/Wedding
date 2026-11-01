import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const initialPage = window.location.pathname.replace(/\/$/, '') === '/gallery' ? 'gallery' : 'home';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialPage={initialPage} />
  </React.StrictMode>,
);