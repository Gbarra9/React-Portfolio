import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/About.scss';

export const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2 className={`about-header ${theme}`}>About Us</h2>
      <button onClick={toggleTheme}>Click</button>
    </>
  );
};
