import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login'
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HeigzG83i8vZF9C7gsy6l9NfW6OrELVBrATefoEwIonx1LO9qSBTyQl6OL9GIsqz4jLG9vMdOhSjLXQPyqoRaG200k7ylR3bW')

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is", authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

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

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

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
