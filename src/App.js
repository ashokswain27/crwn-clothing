import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/homepage/hompage.component';
import ShopPage from './components/pages/shop/shop-component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
