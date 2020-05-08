import React from 'react';

import style from '../css/feedback.css';

const FeedbackLink = ({ showLinks, openModal, product }) => {
  if (showLinks) {
    return (
      <div className={style['item-feedback-link']}>
        <a href="#" onClick={() => openModal(product)}>
          Feedback
        </a>
      </div>
    );
  }
  return null;
};

export default FeedbackLink;
