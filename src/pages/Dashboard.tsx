// src/pages/Dashboard.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ProgressBar from '../components/ProgressBar';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  // Donnée fictive à remplacer par données réelles
  const progress = 60;

  return (
    <MainLayout>
      <h1>{t('title')}</h1>
      <h2>{t('progress')}</h2>
      <ProgressBar progress={progress} />
    </MainLayout>
  );
};

export default Dashboard;
