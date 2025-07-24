// src/App.tsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './assets/styles/global.css'; // Ton style global
import './locales/i18n'; // Initialisation i18next

function App() {
  return <AppRoutes />;
}

export default App;
