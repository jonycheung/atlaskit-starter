import React, { PureComponent } from 'react';
import PageComponent from 'ak-page';
import Navigation, { NavigationLink } from 'ak-navigation';
import { Link } from 'react-router';

import AtlassianIconWC from 'ak-icon/glyph/atlassian';
import GearIconWC from 'ak-icon/glyph/bitbucket/admin';
import DashboardIconWC from 'ak-icon/glyph/bitbucket/dashboard';
import PullRequestsIconWC from 'ak-icon/glyph/bitbucket/pullrequests';
import 'ak-css-reset';

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
      <Page layout="fixed">
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
          <NavLink href="/" selected>
            <DashboardIcon slot="icon" />
            <Link to="/">Dashboard</Link>
          </NavLink>
          <NavLink href="/pull-requests" >
            <PullRequestsIcon slot="icon" />
            <Link to="/pull-requests">Pull requests</Link>
          </NavLink>
          <NavLink href="/settings">
            <GearIcon slot="icon" />
            <Link to="/settings">Settings</Link>
          </NavLink>
        </Nav>

        <div>
          {this.props.children}
        </div>

      </Page>
    );
  }
}
