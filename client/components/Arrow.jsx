import React from 'react';
import propTypes from 'prop-types';

const Arrow = ({ direction, nextPane }) => (
  <button type="button" onClick={nextPane}>{direction}</button>
);

Arrow.propTypes = {
  direction: propTypes.string.isRequired,
  nextPane: propTypes.func.isRequired,
};

export default Arrow;
