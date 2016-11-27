import React, { PureComponent } from 'react';
import Nav, { AkContainerItem, AkContainerHeader as NavHeader } from 'ak-navigation';
import { Link } from 'react-router';

import {
  AtlassianIcon,
  BitbucketAdminIcon as GearIcon,
  BitbucketDashboardIcon as DashboardIcon,
  BitbucketPullrequestsIcon as PullRequestsIcon,
} from 'ak-icon';
import 'ak-css-reset';

const myLinks = [
  ['/', 'Home'],
  ['/pull-requests', 'Pull requests'],
  ['/settings', 'Settings'],
];

export default class App extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <style>{'body { margin: 0 }'}</style>
        <Nav
          containerHeader={
            <Link to="/">
              <NavHeader
                text={'AtlasCat'}
                icon={<img alt="nucleus" src="nucleus.png" />}
              />
            </Link>
          }
        >
          {
            myLinks.map(link => (
              <Link to={link[0]}>
                <AkContainerItem
                  icon={<img src="nucleus.png" alt="icon" />}
                  text={link[1]}
                />
              </Link>
            ))
          }
        </Nav>

        <div style={{ margin: '32px 64px' }}>
          {this.props.children}
        </div>

      </div>
    );
  }
}
