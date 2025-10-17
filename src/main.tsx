import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/styles/global.scss';
import {ErrorBoundary} from '@/hoc/ErrorBoundary.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Router>
  </StrictMode>
);
