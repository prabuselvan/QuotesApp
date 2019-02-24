import React, { Component } from 'react';
import Mainpage from './components/MainPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import Search from './components/Search';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            
        <div className='mainRoute'>
            <Switch> 
                <Route path='/signup' component= {Signup}/>
                <Route path='/login'  component= {Login}/>
                <Route path='/' exact component={Mainpage}/>
                <Route path='/search' exact component={Search}/>
              </Switch>
        </div>
        
    
      </div>
    );
  }
}

export default App;
