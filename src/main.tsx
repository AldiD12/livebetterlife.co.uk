import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

// If the root has pre-rendered content, hydrate it (attach event listeners
// to existing HTML). Otherwise, do a full client-side render.
if (rootElement.innerHTML.trim().length > 0) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
