// src/features/examens/ExamenList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadExamens } from './ExamenSlice.ts';
import { RootState } from '../../redux/store.ts';
import ExamCard from '../../components/ExamCard';

const ExamenList: React.FC = () => {
  const dispatch = useDispatch();
  const { examens, loading } = useSelector((state: RootState) => state.examens);

  useEffect(() => {
    dispatch(loadExamens() as any);
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      {examens.map((examen: any) => (
        <ExamCard key={examen.id} examen={examen.attributes} />
      ))}
    </div>
  );
};

export default ExamenList;
