import React, {useEffect} from 'react';
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './app/component/main/header/header'
import AppLogin from './app/component/main/login/login'
import Home from './app/home/home'
import Eventlist from './app/component/other/event-list/eventlist'
import Dictionary from './app/component/other/dictionary/dictionary'
import {useDispatch, useSelector} from 'react-redux';
import {auth} from "./actions/user"

function App() {
  const isAuth = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  }, [dispatch])


  return (
    <Router>
      <AppHeader/>
      {isAuth.isAuth && 
        <Switch>
          <Route  path='/' exact component={Home}/>
          <Route  path="/event-list" component={Eventlist}   />
          <Route  path="/dictionary" component={Dictionary}   />
          <Redirect to="/" />
        </Switch>
      }
      {!isAuth.isAuth && 
        <Switch>
          <Route  path='/' exact component={Home}/>
          <Route  path="/account" component={AppLogin}   />
          <Route  path="/event-list" component={Eventlist}   />
          <Redirect to="/" />
        </Switch>
      }

    </Router>
  );
}
export default App;
