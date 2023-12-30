import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <ScrollControls pages={3} damping={0.1}>
        <OrbitControls enableZoom={false} />
        <Overlay />
        <Office position={[0, 0, 0]} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.02, 1]} />
          <meshNormalMaterial />
        </mesh>
      </ScrollControls>
    </>
  );
};
