// src/pages/Examens.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ExamenList from '../features/examens/ExamenList';
import { useTranslation } from 'react-i18next';

const Examens: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1>{t('add_exam')}</h1>
      <ExamenList />
    </MainLayout>
  );
};

export default Examens;
