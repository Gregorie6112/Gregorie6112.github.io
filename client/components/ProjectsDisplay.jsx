import React from 'react';

let projects = [
  {
    projectName: "Stock Data Visualization",
    projectImage: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
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
        <iframe src='https://my.spline.design/untitled-3076b0e7da0ef84a549d69713f64b129/' frameborder='0' width='100%' height='100%'></iframe>
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