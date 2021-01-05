import React, { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { NoMatch } from './components/NoMatch';
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
      <Switch>
        <Route path='/about' exact component={About}></Route>
        <Route path='/work' exact component={Work}></Route>
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/404' exact component={NoMatch}></Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </ThemeContextProvider>
  );
}

export default App;
