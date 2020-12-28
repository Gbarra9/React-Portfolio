import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';

export const About = () => {
  const { isDarkTheme, themeSet, toggleTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? themeSet.dark : themeSet.light;
  return (
    <>
      <h2 style={{ color: theme.element1 }}>About</h2>
      <button onClick={toggleTheme}>Click</button>
    </>
  );
};
