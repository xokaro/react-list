import React, { Component } from 'react';
import { render } from 'react-dom';
import GetData from './actions/get_data';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <GetData />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));