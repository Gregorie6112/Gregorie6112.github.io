import React from 'react';
import AboutMeInformation from './AboutMeInformation.jsx';

const AboutMeContent = () => (
  <div className="AboutMeContent">
    <div className="AboutMePicture">
        <img className="AboutMePic" src="https://cdn.discordapp.com/attachments/550198988704579654/816156728126472202/Screen_Shot_2021-03-01_at_7.55.03_PM.png"></img>
    </div>
    <div className="AboutMeInformation">
      <AboutMeInformation />
    </div>
  </div>
);
export default AboutMeContent;