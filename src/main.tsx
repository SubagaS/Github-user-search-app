import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './Context/ThemeProvider.tsx';
import { GitHubUserProvider } from './Context/GitHubUserProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitHubUserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GitHubUserProvider>
  </StrictMode>
);
