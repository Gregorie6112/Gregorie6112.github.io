import React from 'react';
import Tilt from 'react-vanilla-tilt';
import GeneralInformation from './GeneralInfo.jsx';
import projects from '../projects.js';
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
          <p className="textForProjects">The Technology Stack Used : <i className="iTag">{projects[0].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">In Progress</i> </p>
          <p className="textForProjects">Self Project : <i className="iTag">{projects[0].projectSelfProject}</i></p>
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
          <p className="textForProjects">The Technology Stack Used : <i className="iTag">{projects[1].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">3 days</i> </p>
          <p className="textForProjects">Self Project : <i className="iTag">{projects[1].projectSelfProject}</i></p>
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
          <p className="textForProjects">The Technology Stack Used : <i className="iTag">{projects[2].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">2 Weeks</i> </p>
          <p className="textForProjects">Self Project : <i className="iTag">{projects[2].projectSelfProject}</i></p>
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
          <p className="textForProjects">The Technology Stack Used : <i className="iTag">{projects[3].projectTechStack}</i></p>
          <p className="textForProjects">Amount Of Time Taken To Complete : <i className="iTag">2 Weeks</i> </p>
          <p className="textForProjects">Self Project : <i className="iTag">{projects[3].projectSelfProject}</i></p>
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