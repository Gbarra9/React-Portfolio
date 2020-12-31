import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/AboutContentContainer.scss';

const AboutContentContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`content-container ${theme}`}>
      <h2 className={`about-header ${theme}`}>About Me</h2>
      <p className={`about-text ${theme}`}>
        <span className={`about-text-1`}>
          My name is Gene Barra. I am a passionate Frontend Developer eager and
          willing to learn new technologies. I am currently open to new
          opportunities.
        </span>
        <span className={`about-text-1`}>
          In my free time and enjoy reading Japanese light novels and running at
          night.
        </span>
      </p>
    </div>
  );
};

export default AboutContentContainer;
