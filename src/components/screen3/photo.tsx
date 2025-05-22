import * as THREE from 'three';
import { Plane, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

type Photo = {
  src: string;
  index: number;
};

export const Photo = (props: Photo) => {
  const photo = useTexture(props.src);
  const ref = useRef<Mesh>(null);
  const [isActive, setIsActive] = useState(props.index === 0);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;

    const scale = isActive ? 1 : 0.5;
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, scale, 0.1);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, scale, 0.1);
  });

  return (
    <Plane
      ref={ref}
      position-z={isActive ? 0 : -1}
      args={[4, 5]}
      material-map={photo}
      material-transparent
      material-colorSpace="srgb"
      material-grayscale={1}
      onClick={() => setIsActive(true)}
    />
  );
};