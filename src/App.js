import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.jsx';
import { ShopPage } from './pages/shopPage/shopPage.jsx';
import Header from './components/header/header.jsx'
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'

import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from "./firebase/firebase.js";

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
  
          <Route exact path='/shop'>
            <ShopPage/>
          </Route>
  
          <Route exact path='/signIn'>
            <SignInAndSignUp/>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
