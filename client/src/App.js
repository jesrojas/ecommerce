import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/header/header.jsx'

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import { checkUserSession } from './redux/user/user.actions.js';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shopPage/shopPage'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = ({ checkUserSession, currentUser }) => {

    useEffect(() => {
      checkUserSession();
    }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/signIn' 
                    render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
          </Suspense>
        </ErrorBoundary>
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
