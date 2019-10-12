import React, { useState, useEffect } from 'react';
import './Menu.css';

const products = [
  {
    name: 'Yakimeshi Rice',
    price: 100
  },
  {
    name: 'Gohan Rice',
    price: 105
  },
  {
    name: 'Paquete 1',
    price: 50
  },
  {
    name: 'Paquete 2',
    price: 65
  }
]

function Menu() {
  return(
    <div>
      <h2>Elige tu producto</h2>
      <Products></Products>
    </div>
  )
}

function Products() {
  return(
    <div className="grid">
      <Product></Product>
    </div>
  )
}

function Product() {
  return products.map(product => (
    <div>
      <div className="product">
        {product.name}
      </div>
      <a href="#">Detalles</a>
    </div>
  ))
}

export default Menu;