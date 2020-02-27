import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

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
          <Route path='/search/:city'>
            <SearchResult />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
