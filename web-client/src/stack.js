import React, {useState} from 'react';
import {Route, BrowserRouter as Router, Link, Switch, useLocation } from 'react-router-dom'
import Questions from './components/questions'
import MainPage from './components/mainPage'
import NavBar from './components/navBar'
import Landing from './components/landing'
import NavLoginBar from './components/navLoginBar'

function Stack(props) {
    const [landing, setLanding] = useState(true);
   
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