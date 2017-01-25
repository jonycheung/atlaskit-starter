import React from 'react';
import AkDropdownMenu from 'ak-dropdown-menu';
import { AkGlobalItem } from 'ak-navigation';
import AkAvatar from 'ak-avatar';

export default (
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
);
