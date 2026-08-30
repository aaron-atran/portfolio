import { Loader, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./Models/book_component/Experience.jsx";
import { UI } from "./Models/book_component/UI.jsx";
import '../css/project.css';

export const BookProjects = () => {
  const [canvasActive, setCanvasActive] = useState(false);

  const LoadingScreen = () => {
    const { progress, active } = useProgress();

    if (!active) return null;

    return (
      <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <div className="mb-4 text-4xl font-bold">
            {Math.round(progress)}%
          </div>

          <div className="text-lg">
            Loading projects...
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="project relative h-screen w-full mx-auto overflow-hidden"
    >
      {canvasActive ? (
        <>
          <Canvas
            shadows
            camera={{
              position: [-0.5, 1, 4],
              fov: 45,
            }}
          >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
          <button
            onClick={() => setCanvasActive(false)}
            className="
              absolute
              right-6
              top-30
              z-[100]
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-black/70
              text-2xl
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-black
            "
            aria-label="Exit projects"
          >
            ×
          </button>
          <UI />
        </>
      ) : (
        <button
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <span onClick={() => setCanvasActive(true)} className="project-btn">
            Explore Projects
          </span>
        </button>
        
      )}
      <LoadingScreen />
    </section>
  );
};
