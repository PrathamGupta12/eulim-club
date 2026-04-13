import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Nucleus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <MeshDistortMaterial color="#d97706" emissive="#d97706" emissiveIntensity={0.5} distort={0.3} speed={2} roughness={0.2} />
    </mesh>
  );
}

function ElectronOrbit({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const electronRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (electronRef.current) {
      electronRef.current.position.x = Math.cos(t) * radius;
      electronRef.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <group rotation={[tilt, 0, tilt * 0.5]}>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
      <mesh ref={electronRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#d97706" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function AtomScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#d97706" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#2563eb" />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <Nucleus />
          <ElectronOrbit radius={1.5} speed={1.2} tilt={0.3} color="#f59e0b" />
          <ElectronOrbit radius={2.2} speed={0.8} tilt={1.2} color="#3b82f6" />
          <ElectronOrbit radius={2.8} speed={0.5} tilt={2.1} color="#ef4444" />
        </Float>
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
