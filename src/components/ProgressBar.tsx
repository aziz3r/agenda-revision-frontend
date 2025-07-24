import React from 'react';

interface Props {
  progress: number; // valeur entre 0 et 100
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '8px' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '12px',
          backgroundColor: '#4caf50',
          borderRadius: '8px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default ProgressBar;
