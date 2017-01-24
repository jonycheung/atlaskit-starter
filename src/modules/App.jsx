import React, { PureComponent, PropTypes } from 'react';
import 'ak-css-reset';
import { Link } from 'react-router';

import Nav, { AkContainerItem, AkContainerHeader as NavHeader } from 'ak-navigation';

import DashboardIcon from 'ak-icon/glyph/bitbucket/dashboard';
import PullRequestsIcon from 'ak-icon/glyph/bitbucket/pullrequests';
import GearIcon from 'ak-icon/glyph/bitbucket/admin';
import AtlassianIcon from 'ak-icon/glyph/atlassian';
import SearchIcon from 'ak-icon/glyph/search';
import CreateIcon from 'ak-icon/glyph/create';
import ArrowleftIcon from 'ak-icon/glyph/arrowleft';

import HelpDropdownMenu from '../components/HelpDropdownMenu';
import AccountDropdownMenu from '../components/AccountDropdownMenu';

import nucleusImage from '../../public/nucleus.png';

import { gridSizeInt } from '../constants';

const navLinks = [
  ['/', 'Home', DashboardIcon],
  ['/pull-requests', 'Pull requests', PullRequestsIcon],
  ['/settings', 'Settings', GearIcon],
];

export default class App extends PureComponent {
  state = {
    isCreateDrawerOpen: false,
    isSearchDrawerOpen: false,
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <style>{`
            body { margin: 0 }
            section { margin-top: ${gridSizeInt * 3}px; }
        `}</style>
        <Nav
          containerHeader={
            <Link to="/">
              <NavHeader
                text="AtlasCat"
                icon={
                  <img alt="nucleus" src={nucleusImage} />
                }
              />
            </Link>
          }
          globalPrimaryIcon={<AtlassianIcon label="Atlassian icon" size="medium" />}
          globalSearchIcon={<SearchIcon label="Search icon" />}
          drawerBackIcon={<ArrowleftIcon label="Back icon" size="medium" />}
          globalAccountItem={AccountDropdownMenu}
          globalCreateIcon={<CreateIcon label="Create icon" />}
          globalHelpItem={HelpDropdownMenu}
          isSearchDrawerOpen={this.state.isSearchDrawerOpen}
          onSearchDrawerOpen={() => (this.setState({ isSearchDrawerOpen: true }))}
          onSearchDrawerClose={() => (this.setState({ isSearchDrawerOpen: false }))}
          searchDrawerContent={<p>Search drawer goes here</p>}
          isCreateDrawerOpen={this.state.isCreateDrawerOpen}
          onCreateDrawerOpen={() => (this.setState({ isCreateDrawerOpen: true }))}
          onCreateDrawerClose={() => (this.setState({ isCreateDrawerOpen: false }))}
          createDrawerContent={<p>Create drawer goes here</p>}
        >
          {
            navLinks.map(link => {
              const [url, title, Icon] = link;
              return (
                <Link key={url} to={url}>
                  <AkContainerItem
                    icon={<Icon label={title} />}
                    text={title}
                    isSelected={this.context.router.isActive(url, true)}
                  />
                </Link>
              );
            })
          }
        </Nav>

        {this.props.children}
      </div>
    );
  }
}
