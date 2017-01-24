import React, { PureComponent } from 'react';
import CupcakeIpsum from '../modules/CupcakeIpsum.jsx';
import { gridSizeInt } from '../constants';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div style={{paddingBottom: `${gridSizeInt*3}px`}}>
        <h1>My awesome settings</h1>
        <CupcakeIpsum paragraphs={5} />
      </div>
    );
  }
}
