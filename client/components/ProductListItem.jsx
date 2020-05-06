import React from 'react';
import propTypes from 'prop-types';

import ProductFeedback from './ProductFeedback';
import Prime from './Prime';

const ProductListItem = ({ product }) => {
  return (
    <div className="single-product">
      <ProductFeedback />
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-title">{product.name}</div>
      <div className="product-ratings">
        <span className="star-rating">Insert Star Rating</span>
        <span className="total-reviews">{product.numReviews}</span>
      </div>
      <div className="product-pricing">
        <span className="price">{product.price}</span>
        <Prime isPrime={product.prime} />
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  product: propTypes.shape({}).isRequired,
};

export default ProductListItem;
