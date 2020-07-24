import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import HomePage from './components/pages/homepage.component';
import './App.css';

import ShopPage from './components/pages/shop.component.jsx';

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
