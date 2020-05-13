/* eslint-disable no-nested-ternary */
import React from 'react';
import propTypes from 'prop-types';

import style from '../css/product-list-item.css';
import FeedbackLink from './FeedbackLink';
import Prime from './Prime';

const ProductListItem = ({ product, showLinks, openModal }) => {
  const { productId, name, imageUrl, avgRating, numReviews, price, prime } = product;
  return (
    <div className={style['single-product']}>
      <FeedbackLink showLinks={showLinks} openModal={openModal} product={product} />
      <a href="#">
        <img src={imageUrl} alt={name} />
        <div className={style['product-title']}>{name}</div>
      </a>
      <div>
        <a className={style['no-change-on-hover']} href="#">
          <i className={avgRating > 4.7 ? style['stars-5']
            : avgRating > 4.2 ? style['stars-4-5']
            : avgRating > 3.7 ? style['stars-4']
            : avgRating > 3.2 ? style['stars-3-5']
            : avgRating > 2.7 ? style['stars-3']
            : avgRating > 2.2 ? style['stars-2-5']
            : avgRating > 1.7 ? style['stars-2']
            : avgRating > 1.2 ? style['stars-1-5']
            : avgRating > 0.7 ? style['stars-1']
            : avgRating > 0.2 ? style['stars-0-5']
            : style['stars-0']}
          />
          <span className={style['total-reviews']}>{numReviews}</span>
        </a>
      </div>
      <div className="product-pricing">
        <a className={style['no-change-on-hover']} href="#">
          <span className={style['price']}>{product.price}</span>
        </a>
        <Prime isPrime={product.prime} />
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  product: propTypes.shape({}).isRequired,
};

export default ProductListItem;
