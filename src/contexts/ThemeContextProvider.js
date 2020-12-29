import React, { useState, createContext, useEffect } from 'react';
// import { themeSet } from '../themes/theme';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  //Reads local storage for key darkTheme and assigns value to data
  // Data is null if darkTheme is not a key found

  // TODO - MORE ERROR HANDLING

  // const data = localStorage.getItem('darkTheme');

  // const initialTheme =
  //   data && typeof data === 'string' ? JSON.parse(data) : true;

  // const [theme, setTheme] = useState({
  //   isDarkTheme: initialTheme,
  //   themeSet,
  // });

  // const toggleTheme = () => {
  //   setTheme({
  //     isDarkTheme: !theme.isDarkTheme,
  //     themeSet,
  //   });
  // };

  const [theme, setTheme] = useState('darkTheme');

  const alterTheme = theme === 'darkTheme' ? 'lightTheme' : 'darkTheme';
  const toggleTheme = () => {
    setTheme(alterTheme);
  };

  // Runs after render and any update of initial theme state
  // Sets key darkTheme to true
  // useEffect(() => {
  //   localStorage.setItem('darkTheme', JSON.stringify(theme.isDarkTheme));
  // }, [theme]);

  useEffect(() => localStorage.setItem('currentTheme', JSON.stringify(theme)), [
    theme,
  ]);

  // debugger;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
