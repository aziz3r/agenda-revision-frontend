// src/features/matieres/MatiereList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMatieres } from './matiereSlice';
import { RootState } from '../../redux/store.ts';
import MatiereCard from '../../components/MatiereCard';

const MatiereList: React.FC = () => {
  const dispatch = useDispatch();
  const { matieres, loading } = useSelector((state: RootState) => state.matieres);

  useEffect(() => {
    dispatch(loadMatieres() as any);
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      {matieres.map((matiere: any) => (
        <MatiereCard key={matiere.id} matiere={matiere.attributes} />
      ))}
    </div>
  );
};

export default MatiereList;
