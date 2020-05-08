import React from 'react';
import propTypes from 'prop-types';

import style from '../css/arrow.css';

const Arrow = ({ direction, nextPane }) => (
  <div className={style['arrow-wrapper']}>
    <button type="button" onClick={nextPane}><i className={style['slide-' + direction]} /></button>
  </div>
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
