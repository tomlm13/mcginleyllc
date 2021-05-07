import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Investments from './components/pages/Investments';
import Assets from './components/pages/Assets';


const App = () => {
 return (
   <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Investments' exact component={Investments} />
          <Route path='/Assets' exact component={Assets} />
        </Switch>
    </Router>
   </>

 );
 }
ReactDOM.render(<App />, document.getElementById('app'));
