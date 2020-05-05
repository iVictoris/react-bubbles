import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import BubblesPage from './components/BubblePage';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubbles" component={BubblesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
