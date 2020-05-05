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
      products: [{
        id: 1,
        productId: 1,
        name: 'Test',
        price: 452.00,
        prime: 1,
        imageUrl: 'test.jpg',
        numReviews: 123456,
        avgRating: 4.5,
      }, {
        id: 2,
        productId: 2,
        name: 'Second product',
        price: 32.00,
        prime: 0,
        imageUrl: 'test2.jpg',
        numReviews: 1496,
        avgRating: 3.5,
      }],
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
    const { products } = this.state;
    return (
      <>
        <div className="sponsored-products-meta">
          <h2>Sponsored products related to this item</h2>
          <PageCount />
        </div>
        <div className=>
          <Arrow direction="left" nextPane={this.previous} />
          <ProductList products={products} />
          <Arrow direction="right" nextPane={this.next} />
        </div>
        <FeedbackToggle />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
