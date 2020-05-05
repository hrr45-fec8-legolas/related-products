import React from 'react';
import propTypes from 'prop-types';

import ProductFeedback from './ProductFeedback';

const ProductListItem = ({ product }) => {
  return (
    <div className="single-product">
      <ProductFeedback />
      <div>{ product }</div>
    </div>
  );
};

ProductListItem.propTypes = {
  product: propTypes.shape({}).isRequired,
};

export default ProductListItem;
