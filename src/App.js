import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './app/component/header/header'
import AppLogin from './app/component/login/login'
import Home from './app/home/home'
import Eventlist from './app/component/event-list/eventlist'
import Dictionary from './app/component/dictionary/dictionary'
function App() {
  return (
    <Router>
      <AppHeader/>
      <Switch>
        <Route  path='/' exact component={Home}/>
        <Route  path="/account" component={AppLogin}   />
        <Route  path="/event-list" component={Eventlist}   />
        <Route  path="/dictionary" component={Dictionary}   />
      </Switch>
    </Router>
  );
}
export default App;
