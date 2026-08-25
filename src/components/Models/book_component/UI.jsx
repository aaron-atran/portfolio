import { atom, useAtom } from "jotai";

export const pageAtom = atom(0);
export const selectedProjectAtom = atom(null);
export const pages = [
  {
    front: {
      image: "Cute Avatar",
    },

    back: {
      image: "portfolio-resume",
      title: "My Resume",
    },
  },

  {
    front: {
      image: "atwork-example",
      title: "AtWork Group",
      body: [
        "Updating Content and Implementing Requested Features",
        "SEO Optimization",
        "Quality Assurance",
        "Website Maintenance & Audit",
        "Integrating Third-Party Software Tools",
      ],
      technologies: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript"],
      testimonial:
        "Aaron is a fantastic partner for our team. He is responsive and a creative problem solver. We have completely retooled our brand, website and digital assets. We couldn’t have done it without Aaron’s knowledge and partnership.",
      url: "https://atwork.com",
    },

    back: {
      image: "liquidware-example",
      title: "Liquidware",
      body: [
        "Converting Figma Designs into pixel-perfect HTML Pages",
        "Implementing Smooth CSS Animations",
        "Executing Modern Website Functionality and Features",
        "Assisting Senior Developer With Creating Drupal Website",
      ],
      technologies: ["Drupal", "HTML5", "CSS", "JavaScript"],
      url: "https://liquidware.com",
    },
  },

  {
    front: {
      image: "seo-example",
      title: "SEOLevelUp",
      body: [
        "Converting Figma Designs Into Pixel-Perfect WordPress Pages",
        "Lift and Shift",
        "Cross-Browser and Mobile Compatibility",
      ],
      technologies: ["WordPress", "Figma", "Elementor"],
      testimonial:
        "Great work! Aaron is phenomenal with dialing everything in on time and accurate. We are using him exclusively for our agency now!",
      url: "https://seolevelup.com/",
    },

    back: {
      image: "ssa",
      title: "Sleep Science Academy",
      body: [
        "Troubleshoot and Maintenance",
        "Website Performance Optimization",
        "Integrating Third-Party Software Tools",
      ],
      technologies: ["WordPress", "Divi", "JavaScript"],
      url: "#",
    },
  },

  {
    front: {
      image: "srr",
      title: "Southernn Rock Restaurant",
      body: [
        "Website Relaunch",
        "Quality Assurance",
        "Performance Optimization",
        "Website Maintenance",
      ],
      technologies: ["WordPress", "Gutenberg", "JavaScript", "PHP", "CSS"],
      url: "https://southernrockrestaurants.com",
    },

    back: {
      image: "bauerhaus-creative",
      title: "Bauerhaus Creative",
      body: [
        "Troubleshoot and Maintenance",
        "Assist Lead Designer With Website Redesign",
        "Executing Modern Website Functionality and Features",
        "Theme Customization",
      ],
      technologies: [
        "WordPress",
        "WPBakery",
        "JavaScript",
        "PHP",
        "CSS",
        "HTML",
      ],
      url: "#",
    },
  },

  {
    front: {
      image: "portfolio",
      title: "This Portfolio",
      body: [],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Three.js",
        "React Three Fiber",
        "GitHub Pages",
        "Vite",
        "Jotai",
      ],
      url: "#",
    },
    back: {
      image: "book-back",
    },
  },
];

const ProjectLightbox = () => {
  const [selectedProject, setSelectedProject] = useAtom(selectedProjectAtom);

  if (!selectedProject) return null;

  return (
    <div
      className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                bg-black-70
                p-6
                backdrop-blur-sm
            "
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="
                    relative
                    w-full
                    max-w-4xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-2xl
                    bg-white-primary
                    p-8
                    text-black-primary
                    shadow-2xl
                "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setSelectedProject(null)}
          className="
                        absolute 
                        right-4 
                        top-4 
                        z-10 
                        flex 
                        h-10 
                        w-10 
                        items-center 
                        justify-center 
                        rounded-full 
                        bg-black text-2xl 
                        text-white 
                        transition 
                        hover:bg-gray-700
                    "
        >
          ×
        </button>

        {/* Image */}
        <img
          src={`./textures/${selectedProject.image}.jpg`}
          alt={selectedProject.title}
          className="w-full rounded-xl object-cover"
        />

        {/* Content */}
        <div className="project-lightbox">
          <h2 className="project-headtext font-bold">{selectedProject.title}</h2>

          {selectedProject.body?.length > 0 && (
            <ul
              className="
                            mt-8
                            list-disc
                            pl-6
                            project-subtext
                        "
            >
              {selectedProject.body.map((paragraph, index) => (
                <li key={index} className="mt-2">
                  {paragraph}
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          <div
            className="
                        mt-3
                        flex
                        flex-wrap
                        gap-2
                      "
          >
            {selectedProject.technologies?.map((tech) => (
              <span
                key={tech}
                className="
                            rounded-full
                            px-3
                            py-1
                            text-sm
                            project-tags
                          "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          {selectedProject.testimonial && (
            <div
              className="
                           mt-4
                            border-l-4
                            border-gray-300
                            pl-4
                            text-lg
                            italic
                            project-subtext
                        "
            >
              "{selectedProject.testimonial}"
            </div>
          )}

          {/* Link */}
          {selectedProject.url && selectedProject.url !== "#" && (
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  const previousPage = () => {
    setPage((currentPage) => Math.max(0, currentPage - 1));
  };

  const nextPage = () => {
    setPage((currentPage) => Math.min(pages.length, currentPage + 1));
  };

  return (
    <>
      <button
        onClick={previousPage}
        disabled={page === 0}
        className="project-arrow-left"
        aria-label="Previous page"
      >
        ‹
      </button>

      <button
        onClick={nextPage}
        disabled={page === pages.length}
        className="project-arrow-right"
        aria-label="Next page"
      >
        ›
      </button>
      <main className="pointer-events-none select-none absolute inset-0 z-10 flex justify-between flex-col">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`project-btn`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`project-btn`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>
      <ProjectLightbox />
    </>
  );
};
