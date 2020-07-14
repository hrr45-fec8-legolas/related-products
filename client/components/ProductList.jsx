import React from 'react';
import propTypes from 'prop-types';

import styles from '../css/product-list.css';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, showLinks, itemGap, openModal }) => {
  const prods = products.map((product) => (
    <ProductListItem
      key={product.productId}
      product={product}
      showLinks={showLinks}
      openModal={openModal}
      url={createRelatedUrl(product.productId)}
    />
  ));
  return (
    <div className={styles['related-product-list']} style={{ gap: itemGap +'px' }}>
      { prods }
    </div>
  );
};

const createRelatedUrl = (productId) => {
  let url = new URLSearchParams(document.location.search.slice(1));
  url.set('id', productId);
  return '?' + url.toString();
}

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
