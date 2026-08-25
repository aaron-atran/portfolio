import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Models/book_component/Experience.jsx";
import { UI } from "./Models/book_component/UI.jsx";
import '../css/project.css';

export const BookProjects = () => {
  return (
    <section className="relative h-screen w-full mx-auto overflow-hidden" id="projects">
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </section>
  );
}
