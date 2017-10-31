import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Profile from './components/Profile/Profile.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Journal from './components/Journal/Journal.js';
import Goals from './components/Goals/Goals.js';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path ='/aboutus' component={AboutUs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/journal' component={Journal}/>
          <Route path='/goals' component={Goals}/>
        </Switch>
      </div>
    );
  }
}

export default App;
