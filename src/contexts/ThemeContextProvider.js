import React, { useState, createContext, useEffect } from 'react';
import ReactGA from 'react-ga';

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

  const dataTheme = localStorage.getItem('currentTheme');
  const initialTheme = dataTheme ? JSON.parse(dataTheme) : 'darkTheme';

  const [theme, setTheme] = useState(initialTheme);

  const currentTheme = theme === 'darkTheme' ? 'lightTheme' : 'darkTheme';
  const toggleTheme = () => {
    setTheme(currentTheme);
    ReactGA.event({
      category: 'User',
      action: 'Clicked or pressed theme toggle button',
      label: 'Navbar theme toggle icon',
    });
  };

  // Runs after render and any update of initial theme state
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
