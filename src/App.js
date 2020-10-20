import React from 'react';
import './App.css';
import Login from './Components/Login'
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>


          <Route path='/login'>
            <Login />
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
