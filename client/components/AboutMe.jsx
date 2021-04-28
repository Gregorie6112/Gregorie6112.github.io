import React from 'react';
import AboutMeHeader from './AboutMeHeader.jsx';
import AboutMeContent from './AboutMeContent.jsx';
import AboutMeSkills from './AboutMeSkills.jsx';

const AboutMe = () => (
  <div className="AboutMeSection" id="AboutMeSection">
    <AboutMeHeader />
    <AboutMeContent />
    <AboutMeSkills />
  </div>
);
export default AboutMe;