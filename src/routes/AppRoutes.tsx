// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Examens from '../pages/Examens';
import AddExamen from '../pages/AddExamen';
import Matieres from '../pages/Matieres';
import AddMatiere from '../pages/AddMatiere';
import Calendrier from '../pages/Calendrier';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/examens" element={<Examens />} />
        <Route path="/ajouter-examen" element={<AddExamen />} />
        <Route path="/matieres" element={<Matieres />} />
        <Route path="/ajouter-matiere" element={<AddMatiere />} />
        <Route path="/calendrier" element={<Calendrier />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
