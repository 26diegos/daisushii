import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/product/" component={Product} />
          <Route exact path="/cart/" component={Cart} />
        </div>
      </Router>
    </div>
  );
}

export default App;
