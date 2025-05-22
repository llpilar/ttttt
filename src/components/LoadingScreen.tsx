import { useState, useEffect } from 'react';
import { Scene } from './Scene';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [invertedLogo, setInvertedLogo] = useState<string | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      setInvertedLogo(canvas.toDataURL());
    };
    
    img.src = 'https://images.tcdn.com.br/files/841781/themes/21/img/settings/1596380723_logo_site.png?f691b5df8227d8d38c2bcc94288ecdf9';
  }, []);

  const handleStart = () => {
    setIsLoading(false);
  };

  if (!isLoading) {
    return <Scene />;
  }

  return (
    <div className="loading-screen">
      {invertedLogo && (
        <img 
          src={invertedLogo} 
          alt="Pilar Papéis" 
          style={{ 
            maxWidth: '300px',
            marginBottom: '2rem'
          }} 
        />
      )}
      <h1>PILAR PAPÉIS</h1>
      <button onClick={handleStart}>INICIAR EXPERIÊNCIA</button>
    </div>
  );
};