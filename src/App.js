import { Navbar } from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import './styles/App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/work' component={Work}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
