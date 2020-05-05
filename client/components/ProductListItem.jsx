import React from 'react';

import ProductFeedback from './ProductFeedback';

function ProductListItem({ product }) {
  return (
    <div className="single-product">
      <ProductFeedback />
      <div></div>
    </div>
  );
}

export default ProductListItem;
