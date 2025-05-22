import { Plane, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

type Photo = {
  src: string;
  index: number;
  position: [number, number, number];
};

export const Photo = ({ src, position }: Photo) => {
  const photo = useTexture(src);
  const ref = useRef<Mesh>(null);

  return (
    <Plane
      ref={ref}
      position={position}
      args={[4, 5]}
      material-map={photo}
      material-transparent
      material-alphaTest={0.1}
    />
  );
};