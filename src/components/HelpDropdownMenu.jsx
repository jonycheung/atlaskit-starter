import React from 'react';
import AkDropdownMenu from 'ak-dropdown-menu';
import { AkGlobalItem } from 'ak-navigation';
import HelpIcon from 'ak-icon/glyph/help';

export default (
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
);
