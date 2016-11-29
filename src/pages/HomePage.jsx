import React, { PureComponent } from 'react';
import Button from 'ak-button';
import Modal from 'ak-modal-dialog';
import CupcakeIpsum from '../modules/CupcakeIpsum.jsx';

export default class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  // This doesn't fire are the moment, need to update ak-button
  showModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <h1>My awesome app</h1>
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <p>
          <Button
            appearance="primary"
            onClick={this.showModal.bind(this)}
          >Click for cupcakes</Button>
        </p>

        <Modal
          header={
            <h2>Candy bar</h2>
          }
          footer={
            <Button appearance="subtle">Exit candy bar</Button>
          }
          isOpen={this.state.isOpen}
        >
          <p style={{ textAlign: 'center' }}>
            <img src="http://i.giphy.com/yidUztgRB2w2gtDwL6.gif" alt="Moar cupcakes" />
          </p>
        </Modal>
      </div>
    );
  }
}
