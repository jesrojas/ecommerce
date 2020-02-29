import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.jsx';
import { ShopPage } from './pages/shopPage/shopPage.jsx';
import { Header } from './components/header/header.jsx'

import { Switch, Route } from 'react-router-dom';
// const HatPage = () => (
//   <div>
//     <h1>Hat Page</h1>
//   </div>
// );

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
