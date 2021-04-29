import showScroll from './components/showScroll.jsx';

var renderItems = () => {
  let projects = document.getElementsByClassName('ProjectHolder');
  let title = document.getElementsByClassName('WorkCompleted');
  let aboutMe = document.getElementsByClassName('AboutMePicture');
  let aboutMeText = document.getElementsByClassName('AboutMeInformationText');
  let aboutMeTech = document.getElementsByClassName('AboutMeSkills');
  let arr5 = [...aboutMeTech];
  let arr4 = [...aboutMeText];
  let arr3 = [...aboutMe];
  let arr2 = [...title];
  let arr = [...projects];
  showScroll(arr5);
  showScroll(arr4);
  showScroll(arr3);
  showScroll(arr2);
  showScroll(arr);
};
export default renderItems;