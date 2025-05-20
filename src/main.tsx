import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/400.css';
import './index.css';
import App from '@/App';
import { ColorModeProvider } from '@/components/ColorTheme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </StrictMode>,
);
