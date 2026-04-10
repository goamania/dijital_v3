'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Particle Component
function FloatingParticle({ position, scale, speed, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Abstract Geometric Shape
function GeometricShape({ position, rotation, scale }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#0ea5e9"
        wireframe
        transparent
        opacity={0.3}
        emissive="#0ea5e9"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Main 3D Scene
function HeroScene() {
  const particles = useMemo(() => [
    { position: [-3, 2, -5] as [number, number, number], scale: 0.3, speed: 0.8, color: '#0ea5e9' },
    { position: [3, -1, -4] as [number, number, number], scale: 0.4, speed: 0.6, color: '#d946ef' },
    { position: [-2, -2, -6] as [number, number, number], scale: 0.25, speed: 1, color: '#38bdf8' },
    { position: [4, 3, -7] as [number, number, number], scale: 0.35, speed: 0.7, color: '#e879f9' },
    { position: [0, 1, -8] as [number, number, number], scale: 0.5, speed: 0.5, color: '#0284c7' },
    { position: [-4, 0, -5] as [number, number, number], scale: 0.2, speed: 1.2, color: '#c026d3' },
    { position: [2, -3, -6] as [number, number, number], scale: 0.3, speed: 0.9, color: '#7dd3fc' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
      
      {particles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} />
      ))}
      
      <GeometricShape position={[0, 0, -10]} rotation={[0, 0, 0]} scale={2} />
      <GeometricShape position={[5, 2, -12]} rotation={[0.5, 0.5, 0]} scale={1.5} />
      <GeometricShape position={[-5, -2, -11]} rotation={[-0.3, 0.3, 0]} scale={1.8} />
      
      <Environment preset="city" />
    </>
  );
}

// Loading Fallback
function HeroSceneLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-900/20 to-accent-900/20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
    </div>
  );
}

// Main Hero Visual Component
export default function HeroVisual() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<HeroSceneLoading />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }}
          dpr={[1, 2]} // Adaptive pixel ratio for performance
          frameloop="demand" // Only render when needed
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{
            background: 'transparent',
          }}
        >
          <HeroScene />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Lazy-loaded wrapper for better LCP
export function HeroVisualLazy() {
  return (
    <div className="relative w-full h-full">
      <Suspense fallback={<HeroSceneLoading />}>
        <HeroVisual />
      </Suspense>
    </div>
  );
}
