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

  showModal = () => {
    this.setState({ isOpen: true });
  }

  hideModal = () => {
    this.setState({ isOpen: false });
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
            onClick={this.showModal}
          >Click for cupcakes</Button>
        </p>

        <Modal
          header={
            <h2>Candy bar</h2>
          }
          footer={
            <Button appearance="subtle" onClick={this.hideModal}>Exit candy bar</Button>
          }
          isOpen={this.state.isOpen}
          onBlanketClicked={this.hideModal}
        >
          <p style={{ textAlign: 'center' }}>
            <img src="http://i.giphy.com/yidUztgRB2w2gtDwL6.gif" alt="Moar cupcakes" />
          </p>
        </Modal>
      </div>
    );
  }
}
