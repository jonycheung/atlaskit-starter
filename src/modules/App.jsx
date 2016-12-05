import React, { PureComponent } from 'react';
import Nav, { AkContainerItem, AkContainerHeader as NavHeader } from 'ak-navigation';
import { Link } from 'react-router';

import {
  AtlassianIcon,
  BitbucketDashboardIcon as DashboardIcon,
  BitbucketPullrequestsIcon as PullRequestsIcon,
  BitbucketAdminIcon as GearIcon,
} from 'ak-icon';
import 'ak-css-reset';

const myLinks = [
  ['/', 'Home', DashboardIcon],
  ['/pull-requests', 'Pull requests', PullRequestsIcon],
  ['/settings', 'Settings', GearIcon],
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
          globalPrimaryIcon={<AtlassianIcon />}
        >
          {
            myLinks.map(link => {
              const [url, title, Icon] = link;
              return (
                <Link key={url} to={url}>
                  <AkContainerItem
                    icon={<Icon label={title} />}
                    text={title}
                  />
                </Link>
              );
            })
          }
        </Nav>

        <div style={{ margin: '32px 64px' }}>
          {this.props.children}
        </div>

      </div>
    );
  }
}
