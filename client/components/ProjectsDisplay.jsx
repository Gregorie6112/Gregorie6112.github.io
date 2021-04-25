import React from 'react';

let projects = [
  {
    projectName: "Stock Data Visualization",
    projectImage: "",
    projectCode: "",
    projectWebsite: "",
  },
  {
    projectName: "Database Optimization",
    projectImage: "",
    projectCode: "",
    projectWebsite: "",
  },
  {
    projectName: "Synchronous Chat Application",
    projectImage: "",
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
// Returns boxes based on how many items are in projects array above
// const ProjectsDisplay = () => (
//   <div className="ProjectsDisplay">
//     {projects.map((el, index) => (
//       <div className="ProjectHolder">
//         <div className="ProjectsTitle">
//           HI
//               <div className="ProjectsPicture">
//           </div>
//         </div>
//       </div>
//     ))};
//   </div>
// )
// export default ProjectsDisplay;





// Hardcoded boxes
const ProjectsDisplay = () => (
  <div className="ProjectsDisplay">
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[0].projectName}
      </div>
        <div className="ProjectsPicture">
        <iframe src='/StockVisuals/index.html' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[1].projectName}
      </div>
        <div className="ProjectsPicture">
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[2].projectName}
      </div>
        <div className="ProjectsPicture">
        <iframe src='/ChatVisuals/index.html' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    </div>
    <div className="ProjectHolder">
      <div className="ProjectsTitle">
        {projects[3].projectName}
      </div>
        <div className="ProjectsPicture">
        </div>
    </div>
  </div>
);
export default ProjectsDisplay;