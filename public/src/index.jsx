import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div>
      <h1>What's Good</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));