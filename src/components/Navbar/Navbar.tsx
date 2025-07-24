// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav style={{ backgroundColor: '#1976d2', color: '#fff', padding: '10px' }}>
      <h2>{t('title')}</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff' }}>🏠 Dashboard</Link></li>
        <li><Link to="/examens" style={{ color: '#fff' }}>📚 Examens</Link></li>
        <li><Link to="/ajouter-examen" style={{ color: '#fff' }}>➕ Ajouter Examen</Link></li>
        <li><Link to="/matieres" style={{ color: '#fff' }}>📘 Matières</Link></li>
        <li><Link to="/ajouter-matiere" style={{ color: '#fff' }}>➕ Ajouter Matière</Link></li>
        <li><Link to="/calendrier" style={{ color: '#fff' }}>📅 Calendrier</Link></li>
        <li>
          🌐
          <button onClick={() => changeLang('fr')}>🇫🇷</button>
          <button onClick={() => changeLang('en')}>🇬🇧</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

