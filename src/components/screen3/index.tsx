import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { SCREEN3_OFFSET_START_Y } from './constants';
import { dataPhotos } from './dataPhotos';
import { Photo } from './photo';
import { Group } from 'three';

export const Screen3 = () => {
  const scroll = useScroll();
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.x = scroll.offset * -20;
  });

  return (
    <Scroll>
      <group ref={groupRef} position-y={SCREEN3_OFFSET_START_Y}>
        {Object.entries(dataPhotos).map(([name, src], i) => (
          <Photo 
            key={name} 
            index={i} 
            src={src} 
            position={[i * 5, 0, 0]}
          />
        ))}
      </group>
    </Scroll>
  );
};