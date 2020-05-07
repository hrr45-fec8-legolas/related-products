import React from 'react';
import propTypes from 'prop-types';

const Arrow = ({ direction, nextPane }) => (
  <button type="button" onClick={nextPane}>{direction}</button>
);

Arrow.propTypes = {
  direction: propTypes.string,
  nextPane: propTypes.func,
};

Arrow.defaultProps = {
  direction: 'left',
  nextPane: () => {},
};

export default Arrow;
