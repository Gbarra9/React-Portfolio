import React, { useState, createContext, useEffect } from 'react';
import { themeSet } from '../themes/theme';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  //Reads local storage for key darkTheme and assigns value to data

  // TODO - MORE ERROR HANDLING

  const data = localStorage.getItem('darkTheme');

  const initialTheme =
    data && typeof data === 'string' ? JSON.parse(data) : true;

  const [theme, setTheme] = useState({
    isDarkTheme: initialTheme,
    themeSet,
  });

  const toggleTheme = () => {
    setTheme({
      isDarkTheme: !theme.isDarkTheme,
      themeSet,
    });
  };

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(theme.isDarkTheme));
  }, [theme]);
  // debugger;
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
