import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/About.scss';

export const About = () => {
  // const { isDarkTheme, themeSet, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const theme = isDarkTheme ? themeSet.dark : themeSet.light;
  console.log(theme);

  return (
    <>
      <h2 className={`about-header ${theme}`}>About Us</h2>
      <button onClick={toggleTheme}>Click</button>
    </>
  );
};
