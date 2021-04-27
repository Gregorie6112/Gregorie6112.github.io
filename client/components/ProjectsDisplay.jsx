import React from 'react';
import Tilt from 'react-vanilla-tilt';
import GeneralInformation from './GeneralInfo.jsx';

let projects = [
  {
    projectTechStack: "React, Javascript, Jest, Github Actions, Node.js, Express, MongoDB",
    projectSelfProject: "Yes",
    projectName: "Algorithm Visualizer",
    projectImage: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    projectCode: "https://github.com/Gregorie6112/datastructures",
    projectWebsite: "",
    projectGeneralInfo: "My main purpose for building this application was due to my gap in knowledge with data structures, algorithms and the whole development life cycle. I recognized my weak spots and decided to improve on it by building an application that would visualize the algorithms working. Utilized Figma for component building, Continuous Integration, Jest unit testing, and currently working on refactoring to use React Hooks."
  },
  {
    projectTechStack: "React, Javascript, MongoDB, Node.js, Express",
    projectSelfProject: "Yes",
    projectName: "Stock Data Visualization",
    projectImage: "https://images.unsplash.com/photo-1613843433065-819a04a47a09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    projectCode: "https://github.com/Gregorie6112/Chartify",
    projectWebsite: "https://chartify-gregorie-calderon.herokuapp.com/",
    projectGeneralInfo: "From Design to Implementation, the main goal of the project was to visually render stock data fetched using Axios and storing the information into the database to allow the user to re search for a new ticker and if need be , navigate back to previous ticker symbol that was searched without submitting a new request. If a new request was submitted for the same ticker, it would update the database with the new most up to date price."
  },
  {
    projectTechStack: "React, Javascript, postgreSQL / MongoDB, Node.js, Express, k6, New Relic, Loader.io",
    projectSelfProject: "No",
    projectName: "Database Optimization",
    projectImage: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    projectCode: "https://github.com/NikeSDC/relatedProducts",
    projectWebsite: "https://docs.google.com/document/d/1XyOY2WJpS-u0o08tnVC8YqyUWa42yzIO_61Pyj6kCj0/edit?usp=sharing",
    projectGeneralInfo: "Lead 7 engineers while inheriting legacy code base and refactored from a non-relational to relational. Optimize the backend queries and database to withstand a sudden influx of users x1000 RPS and locally test existing infrastructure before deploying to AWS and using Loader.io to stress test in the cloud while using NGINX load balancers.",
  },
  {
    projectTechStack: "React, Javascript, postgreSQL, Node.js, Express, Socket.io, AWS, Firebase, Bootstrap",
    projectSelfProject: "No",
    projectName: "Synchronous Chat Application",
    projectImage: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    projectCode: "https://github.com/hrla41-mvp/main-app",
    projectWebsite: "http://13.52.214.136:3000/",
    projectGeneralInfo: "Lead a team of 4 engineers, including myself to acheive a real time chat application. From distributing work based on career goals to pair-programming and code reviews, the goal was to get this application out in 2 weeks deployed and ready to use. Backend built on postgreSQL and Frontend is React.js."
  },
];

const ProjectsDisplay = () => (
  <div className="ProjectsDisplay">
    <div className="ProjectHolder One">
      <div className="ProjectsTitle">
        {projects[0].projectName}
      </div>
      <div className="ProjectContentHolder">
        <Tilt className="tilt">
          <button className="button">Hover over me!</button>
          <img src={projects[0].projectImage} alt=""></img>
        </Tilt>
        <div className="ProjectInformationHolder">
          <p className="textForProjectsTitle">Learn More About The Project </p>
          <p className="textForProjects">The Technology Stack Used : <i>{projects[0].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">In Progress</i> </p>
          <p className="textForProjects">Self Project : <i>{projects[0].projectSelfProject}</i></p>
          <div className="textForProjects">General Information : <GeneralInformation text={projects[0].projectGeneralInfo}/></div>
          <a className="atagForButton" href={projects[0].projectCode} target="_blank"><button className="viewCodeOrLive">Source Code</button></a>
          <a className="atagForButton"><button className="viewCodeOrLive">Project Will Be Live Soon!</button></a>
        </div>
      </div>
    </div>


    <div className="ProjectHolder Two">
      <div className="ProjectsTitle">
        {projects[1].projectName}
      </div>
      <div className="ProjectContentHolder">
      <div className="ProjectInformationHolder">
          <p className="textForProjectsTitle">Learn More About The Project </p>
          <p className="textForProjects">The Technology Stack Used : <i>{projects[1].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">3 days</i> </p>
          <p className="textForProjects">Self Project : <i>{projects[1].projectSelfProject}</i></p>
          <div className="textForProjects">General Information : <GeneralInformation text={projects[1].projectGeneralInfo}/></div>
          <a className="atagForButton" href={projects[1].projectCode} target="_blank"><button className="viewCodeOrLive">Source Code</button></a>
          <a className="atagForButton" href={projects[1].projectWebsite} target="_blank"><button className="viewCodeOrLive">View Live</button></a>
        </div>
        <Tilt className="tilt">
          <button className="button">Hover over me!</button>
          <img src={projects[1].projectImage} alt=""></img>
        </Tilt>
      </div>
    </div>


    <div className="ProjectHolder Three">
      <div className="ProjectsTitle">
        {projects[2].projectName}
      </div>
      <div className="ProjectContentHolder">
        <Tilt className="tilt">
          <button className="button">Hover over me!</button>
          <img src={projects[2].projectImage} alt=""></img>
        </Tilt>
        <div className="ProjectInformationHolder">
          <p className="textForProjectsTitle">Learn More About The Project </p>
          <p className="textForProjects">The Technology Stack Used : <i>{projects[2].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">2 Weeks</i> </p>
          <p className="textForProjects">Self Project : <i>{projects[2].projectSelfProject}</i></p>
          <div className="textForProjects">General Information : <GeneralInformation text={projects[2].projectGeneralInfo}/></div>
          <a className="atagForButton" href={projects[2].projectCode} target="_blank"><button className="viewCodeOrLive">Source Code</button></a>
          <a className="atagForButton" href={projects[2].projectWebsite} target="_blank"><button className="viewCodeOrLive">View Daily Journal</button></a>
        </div>
      </div>
    </div>


    <div className="ProjectHolder Four">
      <div className="ProjectsTitle">
        {projects[3].projectName}
      </div>
      <div className="ProjectContentHolder">
      <div className="ProjectInformationHolder">
          <p className="textForProjectsTitle">Learn More About The Project </p>
          <p className="textForProjects">The Technology Stack Used : <i>{projects[3].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">2 Weeks</i> </p>
          <p className="textForProjects">Self Project : <i>{projects[3].projectSelfProject}</i></p>
          <div className="textForProjects">General Information : <GeneralInformation text={projects[3].projectGeneralInfo}/></div>
          <a className="atagForButton" href={projects[3].projectCode} target="_blank"><button className="viewCodeOrLive">Source Code</button></a>
          <a className="atagForButton" href={projects[3].projectWebsite} target="_blank"><button className="viewCodeOrLive">View Live</button></a>
        </div>
        <Tilt className="tilt">
          <button className="button">Hover over me!</button>
          <img src={projects[3].projectImage} alt=""></img>
        </Tilt>
      </div>
    </div>

  </div>
);
export default ProjectsDisplay;