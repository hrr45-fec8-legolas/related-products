import React from 'react';
import ReactDOM from 'react-dom';

import PageCount from './components/PageCount';
import Arrow from './components/Arrow';
import ProductList from './components/ProductList';
import FeedbackToggle from './components/FeedbackToggle';


// console.log('Webpack is watching for changes!');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ id: 1, productId: 1, name: 'Test' }, { id: 2, productId: 2, name: 'Test number 2' }],
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    if (this.state) {
      // Do nothing for now
    }
  }

  next() {
    if (this.state) {
      // Do nothing for now
    }
  }

  render() {
    return (
      <>
        <PageCount />
        <Arrow direction="left" nextPane={this.previous} />
        <ProductList products={this.state.products} />
        <Arrow direction="right" nextPane={this.next} />
        <FeedbackToggle />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
