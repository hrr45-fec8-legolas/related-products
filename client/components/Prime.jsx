import React from 'react';
import propTypes from 'prop-types';

import style from '../css/prime.css';

const Prime = ({ isPrime }) => {
  if (isPrime) {
    return (
      <a href="#">
        <span className={style['prime-wrapper']}>
          <i className={style.prime} />
        </span>
      </a>
    );
  }
  return null;
};

Prime.propTypes = {
  isPrime: propTypes.number.isRequired,
};

export default Prime;
