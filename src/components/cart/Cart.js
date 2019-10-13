import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  return (
    <div>
      <h2>Carrito</h2>
      <div class='shopping-cart'>
        <div class='item'>

          <div class='image'>
            <img src='https://i0.pngocean.com/files/157/709/249/california-roll-makizushi-gimbap-sashimi-sushi-sushi.jpg' alt='' />
          </div>

          <div class='description'>
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>

          <div class='quantity'>
            <button class='plus-btn' type='button' name='button'>
              <img src='plus.svg' alt='' />
            </button>
            <input type='text' name='name' value='1' />
            <button class='minus-btn' type='button' name='button'>
              <img src='minus.svg' alt='' />
            </button>
          </div>

          <div class='total-price'>$549</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
