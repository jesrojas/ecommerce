import React, { useEffect } from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shopPage/shopPage.jsx';
import Header from './components/header/header.jsx'
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import CheckoutPage from './pages/checkout/checkout.jsx';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import { checkUserSession } from './redux/user/user.actions.js';

const App = ({ checkUserSession, currentUser }) => {

    useEffect(() => {
      checkUserSession();
    }, [checkUserSession]);

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signIn' 
                 render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
