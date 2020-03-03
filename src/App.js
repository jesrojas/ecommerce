import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.jsx';
import { ShopPage } from './pages/shopPage/shopPage.jsx';
import { Header } from './components/header/header.jsx'
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'

import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from "./firebase/firebase.js";
// const HatPage = () => (
//   <div>
//     <h1>Hat Page</h1>
//   </div>
// );

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => { console.log(this.state);})
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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

export default App;
