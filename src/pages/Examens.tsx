import { useEffect, useState } from 'react';
import api from '../api/axios.tsx'; // veille à ce que ce fichier existe
import { Examen } from '../types/Examen';

const Examens = () => {
  const [examens, setExamens] = useState<Examen[]>([]);

  useEffect(() => {
    api
      .get('/exams?populate=*')
      .then((res) => setExamens(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des Examens</h1>
      <ul>
        {examens.map((examen) => (
          <li key={examen.id}>
            {examen.attributes.titre} – {examen.attributes.date} – {examen.attributes.difficulte}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Examens;

