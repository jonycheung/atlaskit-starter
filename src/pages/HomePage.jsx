import React, { PureComponent } from 'react';
import Button from '@atlaskit/button';
import Modal from '@atlaskit/modal-dialog';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';

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
      <ContentWrapper>
        <h1>My awesome app</h1>
        <CupcakeIpsum paragraphs={5} />
        <p>
          <Button
            appearance="primary"
            onClick={this.showModal}
          >Click for cupcakes</Button>
        </p>
        <div>
          <Modal
            header={
              <h2>Candy bar</h2>
            }
            footer={
              <Button appearance="subtle" onClick={this.hideModal}>Exit candy bar</Button>
            }
            isOpen={this.state.isOpen}
            onDialogDismissed={this.hideModal}
          >
            <p style={{ textAlign: 'center' }}>
              <img src="http://i.giphy.com/yidUztgRB2w2gtDwL6.gif" alt="Moar cupcakes" />
            </p>
          </Modal>
        </div>
      </ContentWrapper>
    );
  }
}
