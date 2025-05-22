import { Plane, useAspect, useScroll, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { DoubleSide, Mesh } from "three";
import { OpenerText } from "@/components/opener/openerText";

type VideoPlane = {
  texturePath: string;
};

export const VideoPlane = ({ texturePath }: VideoPlane) => {
  const scroll = useScroll();
  const windowSize = useAspect(1920, 1080);

  const videoTexture = useVideoTexture("https://player.vimeo.com/external/493786124.hd.mp4?s=e7bffc306afd2c00c5e0c5c7192a50f3a7337f8c&profile_id=175&oauth2_token_id=57447761", {
    autoplay: true,
    loop: true,
    muted: true,
    crossOrigin: 'anonymous',
    playsInline: true,
  });

  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = scroll.offset * 2.5;
  });

  return (
    <Suspense fallback={null}>
      <Plane
        ref={ref}
        scale={[...windowSize]}
        material-side={DoubleSide}
        material-map={videoTexture}
      />
      <OpenerText py={0.5} />
    </Suspense>
  );
};