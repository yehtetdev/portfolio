import React from 'react';
import Link from 'next/link';
import {
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiFacebookFill, 
  RiInstagramFill
} from 'react-icons/ri';

const icons = [
  {
    path: '/',
    icon: <RiYoutubeFill />,
  },
  {
    path: '/',
    icon: <RiLinkedinFill />,
  },
  {
    path: '/',
    icon: <RiGithubFill />,
  },
  {
    path: '/',
    icon: <RiFacebookFill />,
  },
  {
    path: '/',
    icon: <RiInstagramFill />,
  }
];
/*
const Socials = ({ containerStyles, iconsStyles }) => {
  return <div className={'${containerStyles}'}>
    {icons.map ((icon, index) => {
    return (
    <Link href={icon.path} key={index}> 
    <div className={'${iconsStyles}'}>{icon.icon}</div>
    </Link>  
    );
    })} 


  </div>;
};

export default Socials; 

*/

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>
            {icon.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

