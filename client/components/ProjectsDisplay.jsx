import React from 'react';

let projects = [
  {
    projectName: "Stock Data Visualization",
    projectImage: "https://images.unsplash.com/photo-1613843433065-819a04a47a09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    projectCode: "",
    projectWebsite: "https://chartify-gregorie-calderon.herokuapp.com/",
  },
  {
    projectName: "Database Optimization",
    projectImage: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    projectCode: "",
    projectWebsite: "",
  },
  {
    projectName: "Synchronous Chat Application",
    projectImage: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    projectCode: "",
    projectWebsite: "",
  },
  {
    projectName: "Algorithm Visualizer",
    projectImage: "",
    projectCode: "",
    projectWebsite: "",
  },
];

const ProjectsDisplay = () => (
  <div className="ProjectsDisplay">
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[0].projectName}
      </div>
        <div className="ProjectsPicture">
        <img src={projects[0].projectImage} alt=""></img>
        {/* <iframe src='/StockVisuals/index.html' frameBorder='0' width='100%' height='100%'></iframe> */}
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[1].projectName}
      </div>
        <div className="ProjectsPicture">
        <img src={projects[1].projectImage} alt=""></img>
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[2].projectName}
      </div>
        <div className="ProjectsPicture">
        <img src={projects[2].projectImage} alt=""></img>
        {/* <iframe src='/ChatVisuals/index.html' frameBorder='0' width='100%' height='100%'></iframe> */}
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[3].projectName}
      </div>
        <div className="ProjectsPicture">
        <img src={projects[0].projectImage} alt=""></img>
        </div>
    </div>
  </div>
);
export default ProjectsDisplay;