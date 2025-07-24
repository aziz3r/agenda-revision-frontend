import React from 'react';
import { Matiere } from '../types/Matiere';

interface Props {
  matiere: Matiere;
}

const MatiereCard: React.FC<Props> = ({ matiere }) => {
  return (
    <div className="matiere-card">
      <h4>{matiere.nom}</h4>
      <p>Difficulté : {matiere.difficulte}</p>
    </div>
  );
};

export default MatiereCard;
