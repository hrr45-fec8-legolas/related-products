import React from 'react';
import propTypes from 'prop-types';

import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  const prods = products.map((product) => (
    <ProductListItem
      key={product.productId}
      product={product}
    />
  ));
  console.log(prods);
  return (
    <div className="related-product-list">
      { prods }
    </div>
  );
};

ProductList.propTypes = {
  products: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default ProductList;
