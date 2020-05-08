import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import style from './css/app.css';
import PageCount from './components/PageCount';
import Arrow from './components/Arrow';
import ProductList from './components/ProductList';
import FeedbackToggle from './components/FeedbackToggle';


// console.log('Webpack is watching for changes!');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      showFeedbackLinks: false,
      windowWidth: 0,
      numItemsToDisplay: 10,
      firstItemInView: 0,
      itemsInView: [],
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.toggleFeedback = this.toggleFeedback.bind(this);
    this.updateViewportWidth = this.updateViewportWidth.bind(this);
  }

  componentDidMount() {
    this.updateViewportWidth();
    window.addEventListener('resize', this.updateViewportWidth);
    // eslint-disable-next-line no-undef
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('id');
    this.getRelatedProducts(id);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportWidth);
  }

  getRelatedProducts(id) {
    axios.get(`/api/related_products/${id}`)
      .then((results) => {
        const formatted = results.data.map((product) => {
          product.price = Number.parseFloat(product.price).toFixed(2);
          return product;
        });
        const { firstItemInView, numItemsToDisplay } = this.state;
        const currentItemsInView = formatted.slice(firstItemInView, numItemsToDisplay);
        // eslint-disable-next-line no-unused-vars
        this.setState((state) => ({
          relatedProducts: formatted,
          itemsInView: currentItemsInView,
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

  startOver() {
    // This should return the first item in view to be at index 0.
    this.setState({
      firstItemInView: 0,
    });
  }

  toggleFeedback() {
    this.setState((state) => ({ showFeedbackLinks: !state.showFeedbackLinks }));
  }

  updateViewportWidth() {
    const viewportWidth = window.innerWidth;
    this.setState({
      windowWidth: viewportWidth,
    });
  }

  render() {
    const { itemsInView, showFeedbackLinks } = this.state;
    if (itemsInView.length > 0) {
      return (
        <div className={style['sponsored-products-module-wrapper']}>
          <div className={style['sponsored-products-meta']}>
            <h2>Sponsored products related to this item</h2>
            <PageCount />
          </div>
          <div className={style['sponsored-products-list']}>
            <Arrow direction="left" nextPane={this.previous} />
            <ProductList products={itemsInView} showLinks={showFeedbackLinks} />
            <Arrow direction="right" nextPane={this.next} />
          </div>
          <FeedbackToggle showLinks={showFeedbackLinks} toggleFeedback={this.toggleFeedback} />
        </div>
      );
    }
    return (
      <>
        <div className={style['sponsored-products-meta']}>
          <h2>No product selected.</h2>
        </div>
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
