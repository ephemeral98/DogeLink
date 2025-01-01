import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './locales/i18n';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import '@css/reset.css';
import '@css/common.css';
import 'virtual:uno.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </BrowserRouter>
);
