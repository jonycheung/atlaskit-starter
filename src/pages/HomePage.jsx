import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Button from '@atlaskit/button';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import InlineEdit from '@atlaskit/inline-edit';

export default class HomePage extends PureComponent {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <PageTitle>My awesome app</PageTitle>
        <CupcakeIpsum paragraphs={5} />
        <div>
          <InlineEdit
            readView={<div />} 
            onConfirm={() => {}}
            onCancel={() => {}}
            label="Some Stuff" value="foo" />
          <Button
            appearance="primary"
            onClick={this.context.showModal}
            onClose={()=>{}}
          >Click for cupcakes</Button>
        </div>
        <div>
          <Button onClick={this.context.addFlag}>Fire a Flag</Button>
        </div>
      </ContentWrapper>
    );
  }
}
