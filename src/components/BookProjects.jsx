import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import { Experience } from "./Models/book_component/Experience.jsx";
import { UI } from "./Models/book_component/UI.jsx";
import '../css/project.css';

const LoadingScreen = ({ canvasActive, onStart }) => {
  const { progress, active } = useProgress();

  const loadingComplete = progress >= 100 && !active;

  return (
    <div
      className={`
        absolute
        inset-0
        z-200
        flex
        items-center
        justify-center
        bg-black
        transition-opacity
        duration-500
        ${canvasActive
          ? "pointer-events-none opacity-0"
          : "opacity-100"
        }
      `}
    >
      <div className="text-center text-white">
        {!loadingComplete ? (
          <>
            <div className="mb-4 text-4xl font-bold">
              {Math.round(progress)}%
            </div>

            <div className="text-lg">
              Loading projects...
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 text-4xl font-bold">
              Projects Ready
            </div>

            <button
              onClick={onStart}
              className="project-btn animate-fade-in"
            >
              Start
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const BookProjects = () => {
  const [canvasActive, setCanvasActive] = useState(false);
  const projectRef = useRef(null);
  const [projectInView, setProjectInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "300px 0px",
      }
    );

    if (projectRef.current) observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, []);

  return (
     <section
      ref={projectRef}
      id="projects"
      className="project relative h-screen w-full mx-auto overflow-hidden"
    >
      {projectInView && (
        <Canvas
          shadows
          camera={{
            position: [-0.5, 1, 4],
            fov: 45,
          }}
        >
          <Suspense fallback={null}>
            <Experience started={canvasActive} />
          </Suspense>
        </Canvas>
      )}

      {canvasActive && <UI />}

      {projectInView && (
        <LoadingScreen
          canvasActive={canvasActive}
          onStart={() => setCanvasActive(true)}
        />
      )}
    </section>
  );
};
