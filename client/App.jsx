import React from 'react';
import ReactDOM from 'react-dom';

import PageCount from './components/PageCount.jsx';
import Arrow from './components/Arrow.jsx';
import ProductList from './components/ProductList.jsx';
import FeedbackToggle from './components/FeedbackToggle.jsx';


// console.log('Webpack is watching for changes!');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <>
        <PageCount />
        <Arrow />
        <ProductList />
        <Arrow />
        <FeedbackToggle />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
