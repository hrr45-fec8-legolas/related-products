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
        <ProductList />
        <Arrow direction="right" nextPane={this.next} />
        <FeedbackToggle />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('srp-app'));
