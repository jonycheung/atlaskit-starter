import React, { PropTypes, PureComponent } from 'react';
import Button from '@atlaskit/button';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

export default class HomePage extends PureComponent {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <PageTitle>My awesome app</PageTitle>
        <CupcakeIpsum paragraphs={5} />
        <p>
          <Button
            appearance="primary"
            onClick={this.context.showModal}
          >Click for cupcakes</Button>
        </p>
        <p>
          <Button onClick={this.context.addFlag}>Fire a Flag</Button>
        </p>
      </ContentWrapper>
    );
  }
}
