import React, { PureComponent } from 'react';
import PageComponent from 'ak-page';
import Navigation, { NavigationLink } from 'ak-navigation';
import AtlassianIconWC from 'ak-icon/glyph/atlassian';
import GearIconWC from 'ak-icon/glyph/bitbucket/admin';
import DashboardIconWC from 'ak-icon/glyph/bitbucket/dashboard';
import PullRequestsIconWC from 'ak-icon/glyph/bitbucket/pullrequests';
import 'ak-css-reset';

import CupcakeIpsum from './CupcakeIpsum.jsx';

// Here we convert our skatejs web components into React components using 'reactify'
// In a few weeks these components will all be native React components so we will be
// able to get rid of these 'reactify' calls.
import reactify from 'skatejs-react-integration'; // eslint-disable-line
const Page = reactify(PageComponent, {});
const Nav = reactify(Navigation, {});
const NavLink = reactify(NavigationLink, {});
const AtlassianIcon = reactify(AtlassianIconWC, {});
const GearIcon = reactify(GearIconWC, {});
const DashboardIcon = reactify(DashboardIconWC, {});
const PullRequestsIcon = reactify(PullRequestsIconWC, {});

export default class App extends PureComponent {
  render() {
    return (
      <Page>
        <Nav
          open
          containerName="My app"
          containerHref="http://example.com"
          containerLogo="nucleus.png"
          productHref="http://atlassian.design"
          collapsible
          slot="navigation"
        >
          <AtlassianIcon slot="global-home" />
          <NavLink selected>
            <DashboardIcon slot="icon" />
            Dashboard
          </NavLink>
          <NavLink href="http://atlassian.design" >
            <PullRequestsIcon slot="icon" />
            Pull requests
          </NavLink>
          <NavLink>
            <GearIcon slot="icon" />
            Settings
          </NavLink>
        </Nav>

        <h1>My awesome app</h1>

        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />
        <CupcakeIpsum />

      </Page>
    );
  }
}
