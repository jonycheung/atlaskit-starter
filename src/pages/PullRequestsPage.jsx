import React, { PureComponent } from 'react';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';

export default class PullRequestsPage extends PureComponent {
  render() {
    return (
      <ContentWrapper>
        <h1>My awesome PRs</h1>
        <CupcakeIpsum paragraphs={5} />
      </ContentWrapper>
    );
  }
}
