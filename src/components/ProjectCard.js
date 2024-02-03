import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden rounded-lg shadow-lg">
        <img className="lg:h-48 md:h-36 w-full object-cover" src={project.image} alt="project" />
        <div className="p-6">
          <span className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-800 text-xs font-medium tracking-widest">{project.category}</span>
          <h2 className="mt-4 mb-2 title-font text-lg font-medium text-gray-900">{project.title}</h2>
          <p className="text-base leading-relaxed mb-3">{project.description}</p>
          <a href={project.link} className="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2 w-4 h-4" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
