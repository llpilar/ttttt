import { Html } from '@react-three/drei';
import { dataPhotos } from './dataPhotos';

export const Thumbnails = () => {
  return (
    <Html position={[0, -3, 0]} center>
      <div className="thumbnails">
        {Object.entries(dataPhotos).map(([name, src], i) => (
          <button key={name} className={i === 0 ? 'active' : ''}>
            <img src={src} alt={`Thumbnail ${i + 1}`} />
          </button>
        ))}
      </div>
    </Html>
  );
};