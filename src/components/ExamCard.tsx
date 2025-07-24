import React from 'react';
import { Examen } from '../types/Examen';

interface Props {
  examen: Examen;
}

const ExamCard: React.FC<Props> = ({ examen }) => {
  return (
    <div className="exam-card">
      <h3>{examen.titre}</h3>
      <p>{examen.date}</p>
    </div>
  );
};

export default ExamCard;
