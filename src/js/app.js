import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  dog = () => {
    console.log('hey doggy dog');
  }

  render() {
    return (
      <div>
        This is base config for a react application..
        <button onClick={this.dog}>Click for dog</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));