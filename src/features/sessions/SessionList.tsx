// src/features/sessions/SessionList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSessions } from './sessionSlice';
import { RootState } from '../../redux/store.ts';

const SessionList: React.FC = () => {
  const dispatch = useDispatch();
  const { sessions, loading } = useSelector((state: RootState) => state.sessions);

  useEffect(() => {
    dispatch(loadSessions() as any);
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;

  return (
    <ul>
      {sessions.map((session: any) => (
        <li key={session.id}>
          {session.attributes.date} — {session.attributes.description}
        </li>
      ))}
    </ul>
  );
};

export default SessionList;
