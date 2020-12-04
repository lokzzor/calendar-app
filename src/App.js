import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './app/component/header/header'
import AppLogin from './app/component/login/login'
import Home from './app/home/home'

function App() {
  return (
    <Router>
      <AppHeader/>
      <Switch>
        <Route  path='/' exact component={Home}/>
        <Route  path="/login" component={AppLogin}   />
      </Switch>
    </Router>
  );
}
export default App;
