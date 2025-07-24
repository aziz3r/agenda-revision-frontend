// src/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
