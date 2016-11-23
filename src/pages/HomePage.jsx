import React, { PureComponent } from 'react';
import CupcakeIpsum from '../modules/CupcakeIpsum.jsx';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <h1>My awesome app</h1>
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
      </div>
    );
  }
}
