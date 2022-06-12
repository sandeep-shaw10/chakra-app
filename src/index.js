import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from "react-router-dom";



const container =  document.getElementById('root');
const root = createRoot(container);
const appName = "chakra-app"

root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${appName}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();