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
              src='https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201'
              alt=''></img>
          </div>
        </div>
        <div className='column'>Some Text in Column Two</div>
      </div>
    </div>
  );
}
export default Product;
