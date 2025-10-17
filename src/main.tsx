import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/styles/global.scss';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
          <App />
    </Router>
  </StrictMode>
);
