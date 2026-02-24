// -----------------------------------------------------------------------------
// 🚪 The Entry Point (The "Big Bang")
// -----------------------------------------------------------------------------
// This file is the FIRST code that runs when the application starts.
// It bridges the gap between the static HTML (index.html) and the dynamic React world.
// -----------------------------------------------------------------------------

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 🎨 Global CSS: Importing this here ensures these styles apply to EVERY component.
import './index.css';
import App from './App.tsx';
import i18n from './i18n/config';
import { I18nextProvider } from 'react-i18next';

// 1. Find the 'root' div in our HTML using standard JavaScript.
//    (The '!' tells TypeScript: "Trust me, I know this element exists.")
createRoot(document.getElementById('root')!).render(
  // 2. Wrap everything in StrictMode.
  //    This is a "Development Helper" that runs checks and warns us about unsafe practices.
  //    (It intentionally renders everything twice in dev mode to catch bugs!)
  <StrictMode>
    {/* 
      3. Global Providers:
      We wrap our <App> in "Providers".
      This gives every component inside <App> access to shared data (like 'i18n' for languages).
    */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);
