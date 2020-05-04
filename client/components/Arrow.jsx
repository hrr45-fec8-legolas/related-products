import React from 'react';

function Arrow({ direction, nextPane }) {
  return (
    <button type="button" onClick={nextPane}>{direction}</button>
  );
}

export default Arrow;
