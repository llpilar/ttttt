import { Text } from "@react-three/drei";

type OpenerText = {
  py: number;
};

export const OpenerText = ({ py }: OpenerText) => {
  return (
    <group position-y={py}>
      <Text
        fontSize={0.8}
        letterSpacing={0.02}
        position-z={0.1}
        position-y={0.5}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        PROCURANDO PAPÉIS?
        <meshBasicMaterial depthTest={false} />
      </Text>
      <Text
        fontSize={0.8}
        letterSpacing={0.02}
        position-z={0.1}
        position-y={-0.5}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        VOCÊ ENCONTRA AQUI
        <meshBasicMaterial depthTest={false} />
      </Text>
    </group>
  );
};