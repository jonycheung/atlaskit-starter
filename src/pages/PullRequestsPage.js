import React, { Component } from 'react';
import CupcakeIpsum from '../components/CupcakeIpsum';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

export default class PullRequestsPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>My awesome PRs</PageTitle>
        <CupcakeIpsum paragraphs={5} />
      </ContentWrapper>
    );
  }
}
