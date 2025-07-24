// src/features/examens/ExamenForm.tsx
import React, { useState } from 'react';
import { addExamen } from './examenService';

const ExamenForm: React.FC = () => {
  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addExamen({ titre, date });
    alert('Examen ajouté !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ExamenForm;
