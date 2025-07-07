import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const OrbitingLogos = () => {
  const groupRef = useRef();
  const logosRef = useRef([]);

  const logos = [
    { text: 'React', color: '#61DAFB', radius: 2, speed: 0.5 },
    { text: 'Node.js', color: '#339933', radius: 2.5, speed: 0.3 },
    { text: 'MongoDB', color: '#47A248', radius: 1.8, speed: 0.7 },
    { text: 'Flutter', color: '#02569B', radius: 2.2, speed: 0.4 },
    { text: 'Spring', color: '#6DB33F', radius: 2.7, speed: 0.6 },
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    logos.forEach((logo, index) => {
      if (logosRef.current[index]) {
        const angle = time * logo.speed + (index * Math.PI * 2) / logos.length;
        logosRef.current[index].position.x = Math.cos(angle) * logo.radius;
        logosRef.current[index].position.z = Math.sin(angle) * logo.radius;
        logosRef.current[index].position.y = Math.sin(time * 0.5 + index) * 0.3;
      }
    });
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {logos.map((logo, index) => (
        <group
          key={logo.text}
          ref={(el) => (logosRef.current[index] = el)}
        >
          <Sphere args={[0.3, 32, 32]}>
            <meshStandardMaterial color={logo.color} />
          </Sphere>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.3}
            color={logo.color}
            anchorX="center"
            anchorY="middle"
          >
            {logo.text}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default OrbitingLogos;