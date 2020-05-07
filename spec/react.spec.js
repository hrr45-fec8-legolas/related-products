import { shallow } from 'enzyme';
import React from 'react';

import ProductList from '../client/components/ProductList';

describe('React components should render', () => {
  test('ProductList component should render', () => {
    shallow(<ProductList />);
  });
});

// describe('First React component test with Enzyme', () => {
//   it('renders without crashing', () => {
//      shallow(<App />);
//    });
// });
