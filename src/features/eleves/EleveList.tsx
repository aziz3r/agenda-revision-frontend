// src/features/eleves/EleveList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEleves } from './eleveSlice';
import { RootState } from '../../redux/store.ts';

const EleveList: React.FC = () => {
  const dispatch = useDispatch();
  const { eleves, loading } = useSelector((state: RootState) => state.eleves);

  useEffect(() => {
    dispatch(loadEleves() as any);
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;

  return (
    <ul>
      {eleves.map((eleve: any) => (
        <li key={eleve.id}>{eleve.attributes.nom}</li>
      ))}
    </ul>
  );
};

export default EleveList;
