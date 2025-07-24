// src/pages/AddExamen.tsx
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { addExamen } from '../features/examens/examenService';
import { TypeExamen } from '../enums/TypeExamen';
import { useNavigate } from 'react-router-dom';

const AddExamen: React.FC = () => {
  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<TypeExamen>(TypeExamen.CONTROLE);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addExamen({
        titre,
        date,
        type,
      });
      alert('Examen ajouté !');
      navigate('/examens');
    } catch (error) {
      console.error('Erreur lors de l’ajout de l’examen :', error);
    }
  };

  return (
    <MainLayout>
      <h1>Ajouter un examen</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type :</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TypeExamen)}
          >
            {Object.values(TypeExamen).map((val) => (
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

export default AddExamen;
