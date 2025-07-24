// src/features/matieres/MatiereForm.tsx
import React, { useState } from 'react';
import { addMatiere } from './matiereService';

const MatiereForm: React.FC = () => {
  const [nom, setNom] = useState('');
  const [difficulte, setDifficulte] = useState('Facile');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addMatiere({ nom, difficulte });
    alert('Matière ajoutée !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <select
        value={difficulte}
        onChange={(e) => setDifficulte(e.target.value)}
      >
        <option value="Facile">Facile</option>
        <option value="Moyen">Moyen</option>
        <option value="Difficile">Difficile</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default MatiereForm;
