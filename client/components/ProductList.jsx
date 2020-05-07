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
  return (
    <div className="related-product-list">
      { prods }
    </div>
  );
};

ProductList.propTypes = {
  products: propTypes.arrayOf(propTypes.shape({})),
};

ProductList.defaultProps = {
  products: [{
    id: 1,
    productId: 1,
    name: 'Test',
    price: 452.00,
    prime: 1,
    imageUrl: 'test.jpg',
    numReviews: 123456,
    avgRating: 4.5,
  }, {
    id: 2,
    productId: 2,
    name: 'Second product',
    price: 32.00,
    prime: 0,
    imageUrl: 'test2.jpg',
    numReviews: 1496,
    avgRating: 3.5,
  }],
};

export default ProductList;
