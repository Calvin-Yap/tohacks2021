import React from 'react';
import {Route, BrowserRouter as Router, Switch,  } from 'react-router-dom'
import Questions from './components/questions'
import MainPage from './components/mainPage'
import Landing from './components/landing'

function Stack(props) {
   
    return (
        <Router>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/home" component={MainPage}/>
        <Route path="/quiz" component={Questions}/>
      </Switch>
      </Router>
    );
}

export default Stack;