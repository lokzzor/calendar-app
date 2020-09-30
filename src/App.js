import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AppHeader from './app/component/header/header'
import AppLogin from './app/component/login/login'

function App() {
  return (
    <Router>
      <AppHeader/>
      <Switch>
      <Route  exact path='/' />
      <Route  path="/login" component={AppLogin}   />
      </Switch>
    </Router>
  );
}
export default App;
