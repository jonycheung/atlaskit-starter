import React, { PureComponent } from 'react';
import Button from '@atlaskit/button';
import Flag, { FlagGroup } from '@atlaskit/flag';
import Modal from '@atlaskit/modal-dialog';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';

export default class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      flags: [],
    }
  }

  showModal = () => {
    this.setState({ isOpen: true });
  }

  hideModal = () => {
    this.setState({ isOpen: false });
  }

  addFlag = () => {
    this.setState({ flags: [{ id: Date.now() }].concat(this.state.flags) });
  }

  onFlagDismissed = (dismissedFlagId) => {
    this.setState({
      flags: this.state.flags.filter(flag => flag.id !== dismissedFlagId),
    })
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
        <p>
          <Button onClick={this.addFlag}>Fire a Flag</Button>
        </p>
        <div>
          <FlagGroup onDismissed={this.onFlagDismissed}>
            {
              this.state.flags.map(flag => (
                <Flag
                  id={flag.id}
                  key={flag.id}
                  title="Flag goes here"
                  description="Flag description goes here"
                />
              ))
            }
          </FlagGroup>
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
