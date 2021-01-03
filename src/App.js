import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Switch, Route, useLocation } from 'react-router-dom';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import './styles/App.scss';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import ReactGA from 'react-ga';

//GOOGLE ANALYTICS
ReactGA.initialize('UA-186408417-1');

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <ThemeContextProvider>
      <Navbar />
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/work' component={Work}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </ThemeContextProvider>
  );
}

export default App;
