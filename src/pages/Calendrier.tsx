// src/pages/Calendrier.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SessionList from '../features/sessions/SessionList';
import { useTranslation } from 'react-i18next';

const Calendrier: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1>{t('calendar')}</h1>
      <SessionList />
    </MainLayout>
  );
};

export default Calendrier;
