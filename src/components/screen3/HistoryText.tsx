import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

export const HistoryText = () => {
  const ref = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.children.forEach((child: any) => {
      const scrollProgress = scroll.offset * 3;
      const opacity = Math.min(1, Math.max(0, scrollProgress - 1.8));
      const yOffset = Math.max(0, (1 - scrollProgress) * 2);
      child.material.opacity = opacity;
      child.position.y = yOffset;
    });
  });

  const text = `Fundada em 1998 a Pilar Comercial e Serviços iniciou suas atividades fabricando e revendendo papel para outras empresas do setor de embalagem de papel.

Com o intuito de ampliar as vendas, decidimos iniciar uma linha de produtos comerciais, utilizando como base nossa matéria prima industrial.

A família Pilar tem longa tradição no mercado papeleiro. A primeira empresa de grupo foi montada em 1960 pelo patriarca da família, Sr. Adhemur Pilar, que depois colocou seus filhos Fernando Pilar e Marcello como sócios.

Aproveitando a experiência do pai, a empresa começou como representação de papel. No final dos anos 70, assumiu a fábrica de papel CIBRAP - Cia. Brasileira de Papel, dirigida pelos irmãos até o final da década de 80, quando foi vendida para o grupo KLABIN. Ambos continuaram trabalhando no segmento, atuando na área comercial e industrial de empresas como KLABIN, VOTORANTIM E CELULOSE IRANI.

Desde 2002, a matriz da empresa está instada em área própria, entre o Rodoanel e a Regis Bittencourt, na cidade de Embu das Artes.

As principais linhas de atuação são os mercados industriais e gráficos, porém utilizando como base nossos papéis hoje trabalhados, acrescentamos a nossa linha produtos descartáveis, escolares e embalagens.

Afim de proporcionar um melhor atendimento, com maior rapidez nas entregas, nos últimos anos algumas filiais pelo Brasil foram abertas.

A ideia de unir vários produtos fabricados, tendo como base a matéria prima papel, é a que nos move e incentiva a continuar crescendo.

Bem vindo a Pilar,`;

  return (
    <group ref={ref} position={[0, -18, 0]}>
      <Text
        fontSize={0.35}
        maxWidth={8}
        lineHeight={1.5}
        letterSpacing={0.01}
        textAlign="justify"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="top"
      >
        {text}
        <meshBasicMaterial transparent opacity={0} depthTest={false} />
      </Text>
    </group>
  );
};