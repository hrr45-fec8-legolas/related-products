/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import ProductList from '../client/components/ProductList';
import Arrow from '../client/components/Arrow';
import FeedbackModal from '../client/components/FeedbackModal';
import FeedbackToggle from '../client/components/FeedbackToggle';
import PageCount from '../client/components/PageCount';

describe('React components should render', () => {
  test('ProductList component should render', () => {
    shallow(<ProductList />);
  });

  test('Arrow component should render', () => {
    shallow(<Arrow />);
  });

  test('FeedbackModal component should render', () => {
    shallow(<FeedbackModal />);
  });

  test('FeedbackToggle component should render', () => {
    shallow(<FeedbackToggle />);
  });

  test('PageCount component should render', () => {
    shallow(<PageCount />);
  });
});
