import React from 'react';
import ReactDOM from 'react-dom';

console.log('Webpack is watching for changes!');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return(
      <div>My app is rendering!</div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('srp-app'));