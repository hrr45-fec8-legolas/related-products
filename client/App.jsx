import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PageCount from './components/PageCount';
import Arrow from './components/Arrow';
import ProductList from './components/ProductList';
import FeedbackToggle from './components/FeedbackToggle';


// console.log('Webpack is watching for changes!');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('id');
    this.getRelatedProducts(id);
  }

  getRelatedProducts(id) {
    axios.get(`/api/related_products/${id}`)
      .then((results) => {
        // eslint-disable-next-line no-unused-vars
        this.setState((state) => ({
          products: results.data,
        }));
      })
      .catch((err) => console.error('Failed to load product data. => ', err));
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
    if (products.length > 0) {
      return (
        <>
          <div className="sponsored-products-meta">
            <h2>Sponsored products related to this item</h2>
            <PageCount />
          </div>
          <div className="sponsored-products-list">
            <Arrow direction="left" nextPane={this.previous} />
            <ProductList products={products} />
            <Arrow direction="right" nextPane={this.next} />
          </div>
          <FeedbackToggle />
        </>
      );
    }
    return (
      <>
        <div className="sponsored-products-meta">
          <h2>No product selected.</h2>
        </div>
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
