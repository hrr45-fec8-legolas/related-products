import React from 'react';

import style from '../css/feedback.css';

const FeedbackLink = ({ showLinks, product, openModal }) => {
  if (showLinks) {
    return (
      <div className={style['item-feedback-link']}>
        <a href="" onClick={(e) => openModal(e, product)}>
          Feedback
        </a>
      </div>
    );
  }
  return null;
};

export default FeedbackLink;
