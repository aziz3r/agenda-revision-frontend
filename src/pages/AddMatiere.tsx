// src/pages/AddMatiere.tsx
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { addMatiere } from '../features/matieres/matiereService';
import { useNavigate } from 'react-router-dom';
import { DIFFICULTE } from '../constants/difficulte';

const AddMatiere: React.FC = () => {
  const [nom, setNom] = useState('');
  const [difficulte, setDifficulte] = useState('Facile');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMatiere({
        nom,
        difficulte,
      });
      alert('Matière ajoutée !');
      navigate('/matieres');
    } catch (error) {
      console.error('Erreur lors de l’ajout de la matière :', error);
    }
  };

  return (
    <MainLayout>
      <h1>Ajouter une matière</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Difficulté :</label>
          <select
            value={difficulte}
            onChange={(e) => setDifficulte(e.target.value)}
          >
            {Object.values(DIFFICULTE).map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </MainLayout>
  );
};

export default AddMatiere;
