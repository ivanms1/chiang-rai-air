import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Who from './pages/Who';
import What from './pages/What';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import SearchResult from './pages/SearchResult';
import Footer from './components/Footer';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/who'>
            <Who />
          </Route>
          <Route exact path='/what'>
            <What />
          </Route>
          <Route exact path='/partners'>
            <Partners />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='/search/:city'>
            <SearchResult />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
