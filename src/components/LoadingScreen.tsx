import { useState } from 'react';
import { Scene } from './Scene';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleStart = () => {
    setIsLoading(false);
  };

  if (!isLoading) {
    return <Scene />;
  }

  return (
    <div className="loading-screen">
      <h1>PILAR PAPÉIS</h1>
      <button onClick={handleStart}>INICIAR EXPERIÊNCIA</button>
    </div>
  );
};