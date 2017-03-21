import React, { PureComponent, PropTypes } from 'react';
import Button from '@atlaskit/button';
import Flag, { FlagGroup } from '@atlaskit/flag';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';

import StarterNavigation from '../components/StarterNavigation';

export default class App extends PureComponent {
  state = {
    flags: [],
    isModalOpen: false,
    openDrawer: null,
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  static PropTypes = {
    navOpenState: PropTypes.object,
    onNavResize: PropTypes.func,
  };

  static childContextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
  }

  getChildContext() {
    return {
      showModal: this.showModal,
      addFlag: this.addFlag,
    };
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
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
      <div>
        <Page
          navigationWidth={this.context.navOpenState.width}
          navigation={
            <StarterNavigation />
          }
        >
          {this.props.children}
        </Page>
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
            isOpen={this.state.isModalOpen}
            onDialogDismissed={this.hideModal}
          >
            <p style={{ textAlign: 'center' }}>
              <img src="http://i.giphy.com/yidUztgRB2w2gtDwL6.gif" alt="Moar cupcakes" />
            </p>
          </Modal>
        </div>
      </div>
    );
  }
}
