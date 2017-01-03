import React, { PureComponent, PropTypes } from 'react';
import Nav, { AkContainerItem, AkContainerHeader as NavHeader, AkGlobalItem } from 'ak-navigation';
import { Link } from 'react-router';
import { akGridSize } from 'akutil-shared-styles';
import nucleusImage from '../../public/nucleus.png';
import {
  AtlassianIcon,
  BitbucketDashboardIcon as DashboardIcon,
  BitbucketPullrequestsIcon as PullRequestsIcon,
  BitbucketAdminIcon as GearIcon,
} from 'ak-icon';
import 'ak-css-reset';

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
  }

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
          globalPrimaryItem={
            <Link to="/" style={{ color: 'white' }}>
              <AkGlobalItem size="large">
                  <AtlassianIcon size="medium" label="Atlassian" />
              </AkGlobalItem>
            </Link>
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
