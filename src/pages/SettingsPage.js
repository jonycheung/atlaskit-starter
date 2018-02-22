import React, { PureComponent } from 'react';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

export default class HomePage extends PureComponent {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>My awesome settings</PageTitle>
        <CupcakeIpsum paragraphs={5} />
      </ContentWrapper>
    );
  }
}
