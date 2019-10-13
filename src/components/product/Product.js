import React, { useState, useEffect } from 'react';
import './Product.css';

function Product() {
  return (
    <div>
      <ProductInformation></ProductInformation>
    </div>
  );
}

function ProductInformation() {
  return (
    <div className='some-page-wrapper'>
      <div className='row'>
        <div className='column'>
          <div className='product-img-container'>
            <img
              className='product-img'
              src='https://i0.pngocean.com/files/157/709/249/california-roll-makizushi-gimbap-sashimi-sushi-sushi.jpg'
              alt=''></img>
          </div>
        </div>
        <div className='column'>
          <h3>California Roll</h3>
        </div>
      </div>
    </div>
  );
}
export default Product;
