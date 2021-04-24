import React from 'react';
import WorkCompleted from './WorkDone.jsx';
import ProjectsDisplay from './ProjectsDisplay.jsx';

const Projects = () => (
  <div className="Projects">
    <WorkCompleted />
    <ProjectsDisplay />
  </div>
);
export default Projects;