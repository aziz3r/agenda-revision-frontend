// src/pages/Matieres.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import MatiereList from '../features/matieres/MatiereList';
import { useTranslation } from 'react-i18next';

const Matieres: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1>{t('add_subject')}</h1>
      <MatiereList />
    </MainLayout>
  );
};

export default Matieres;
