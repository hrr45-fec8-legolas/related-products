import React from 'react';

const PageCount = ({ firstItem, page, pages, startOver }) => {
  if (firstItem) {
    return (
      <div>Page {page} of {pages} <span>|</span> <a href="#" onClick={startOver}>Start over</a></div>
    );
  }
  return (
    <div>
      Page 1 of {pages}
    </div>
  );
};

export default PageCount;
