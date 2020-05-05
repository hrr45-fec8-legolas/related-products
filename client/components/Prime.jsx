import React from 'react';
import propTypes from 'prop-types';

const Prime = ({ isPrime }) => {
  if (isPrime) {
    return <span className="prime" />;
  }
  return null;
};

Prime.propTypes = {
  isPrime: propTypes.number.isRequired,
};

export default Prime;
