import React from 'react';

const Arrow = ({ direction, nextPane }) => {
  return (
    <button type="button" onClick={nextPane}>{direction}</button>
  );
};

export default Arrow;
