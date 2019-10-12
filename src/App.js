import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Product from './components/product/Product'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Router>
        <div>
          <Route exact path="/product/" component={Product} />
        </div>
      </Router>
    </div>
  );
}

export default App;
