import React, { PureComponent } from 'react';
import PageComponent from 'ak-page';
import Navigation, { NavigationLink } from 'ak-navigation';
import AtlassianIcon from 'ak-icon/glyph/atlassian';
import 'ak-css-reset';

import CupcakeIpsum from './CupcakeIpsum.jsx';

// Here we convert our skatejs web components into React components using 'reactify'
import reactify from 'skatejs-react-integration'; // eslint-disable-line
const Page = reactify(PageComponent, {});
const Nav = reactify(Navigation, {});
const NavLink = reactify(NavigationLink, {});
const CharlieIcon = reactify(AtlassianIcon, {});

export default class App extends PureComponent {
  render() {
    return (
      <Page>
        <Nav
          open
          container-name="Nucleus"
          container-href="http://example.com"
          container-logo="http://example.com/img.jpg"
          product-href="http://atlassian.design"
          collapsible
          slot="navigation"
        >
          <CharlieIcon slot="global-home" />
          <NavLink selected>
            Welcome
          </NavLink>
          <NavLink href="http://atlassian.design" >
            Page two
          </NavLink>
          <NavLink>
            Page three
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
