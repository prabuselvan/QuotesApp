import React, { Component } from 'react';
import Mainpage from './components/MainPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import Search from './components/Search';
import Profile from './components/Profile';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            
        <div className='mainRoute'>
            <Switch> 
                <Route path='/signup' exact component= {Signup}/>
                <Route path='/login'  component= {Login}/>
                <Route path='/' exact  component={Mainpage}/>
                <Route path='/search' exact  component={Search}/>
                <Route path='/profile' exact component={Profile}/>
                <Route path='/logout' exact component={Mainpage}/>
              </Switch>
        </div>
        
    
      </div>
    );
  }
}

export default App;
