import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
