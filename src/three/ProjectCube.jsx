import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';

const ProjectCube = ({ position, rotation, color = '#1D3557' }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = React.useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      if (hovered) {
        meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 1.2;
      } else {
        meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 1;
      }
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      rotation={rotation}
      args={[1, 1, 1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={hovered ? '#A8DADC' : color} 
        metalness={0.5}
        roughness={0.2}
      />
    </Box>
  );
};

export default ProjectCube;