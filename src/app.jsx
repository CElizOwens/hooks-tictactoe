import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board className='container' />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

