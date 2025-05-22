import { Scroll } from '@react-three/drei';
import { dataPhotos } from './dataPhotos';
import { Photo } from './photo';
import { Thumbnails } from './thumbnails';

export const Screen3 = () => {
  return (
    <Scroll>
      <group position-y={-13.5}>
        {Object.entries(dataPhotos).map(([name, src], i) => (
          <Photo key={name} index={i} src={src} />
        ))}
        <Thumbnails />
      </group>
    </Scroll>
  );
};