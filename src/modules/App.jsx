import React, { PureComponent, PropTypes } from 'react';
import 'ak-css-reset';
import { Link } from 'react-router';

import Nav, { AkContainerItem, AkContainerHeader as NavHeader, AkGlobalItem } from 'ak-navigation';
import { akGridSize } from 'akutil-shared-styles';
import AkDropdownMenu from 'ak-dropdown-menu';
import AkAvatar from 'ak-avatar';

import DashboardIcon from 'ak-icon/glyph/bitbucket/dashboard';
import PullRequestsIcon from 'ak-icon/glyph/bitbucket/pullrequests';
import GearIcon from 'ak-icon/glyph/bitbucket/admin';
import AtlassianIcon from 'ak-icon/glyph/atlassian';
import SearchIcon from 'ak-icon/glyph/search';
import HelpIcon from 'ak-icon/glyph/help';
import CreateIcon from 'ak-icon/glyph/create';
import ArrowleftIcon from 'ak-icon/glyph/arrowleft';

import nucleusImage from '../../public/nucleus.png';

// Would like to use a LESS file to import styles here,
// but create-react-app doesn't support it.
const gridSizeInt = parseInt(akGridSize, 10);

const myLinks = [
  ['/', 'Home', DashboardIcon],
  ['/pull-requests', 'Pull requests', PullRequestsIcon],
  ['/settings', 'Settings', GearIcon],
];

export default class App extends PureComponent {
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
          globalAccountItem={
            <AkDropdownMenu
              appearance="tall"
              position="right bottom"
              items={[
                {
                  heading: 'Joshua Nelson',
                  items: [
                    { content: 'View profile' },
                    { content: 'Manage Atlassian account' },
                    { content: 'Bitbucket settings' },
                    { content: 'Integrations' },
                    { content: 'Bitbucket labs' },
                    { content: 'Log out' },
                  ],
                },
              ]}
            >
              <AkGlobalItem>
                <AkAvatar size="small" />
              </AkGlobalItem>
            </AkDropdownMenu>
          }
          globalCreateIcon={<CreateIcon label="Create icon" />}
          globalHelpItem={
            <AkDropdownMenu
              appearance="tall"
              items={[
                {
                  heading: 'Help',
                  items: [
                    { content: 'Documentation' },
                    { content: 'Learn Git' },
                    { content: 'Keyboard shortcuts' },
                    { content: 'Bitbucket tutorials' },
                    { content: 'API' },
                    { content: 'Support' },
                  ],
                },
              ]}
              position="right bottom"
            >
              <AkGlobalItem>
                <HelpIcon label="Help icon" />
              </AkGlobalItem>
            </AkDropdownMenu>
          }

        >
          {
            myLinks.map(link => {
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

        <div style={{ margin: `${4 * gridSizeInt}px ${8 * gridSizeInt}px` }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
