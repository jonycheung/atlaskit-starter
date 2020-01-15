import PropTypes from 'prop-types';
import React, { Component } from "react";

import { DrawerItemGroup, DrawerItem } from "@atlaskit/drawer";

import BitbucketBranchesIcon from "@atlaskit/icon/glyph/bitbucket/branches";
import PageIcon from "@atlaskit/icon/glyph/page";
import CalendarIcon from "@atlaskit/icon/glyph/calendar";
import EmojiObjectsIcon from "@atlaskit/icon/glyph/emoji/objects";
import EmojiNatureIcon from "@atlaskit/icon/glyph/emoji/nature";
import EmojiTravelIcon from "@atlaskit/icon/glyph/emoji/travel";

const createItems = [
  {
    title: null,
    items: [
      ['/#event', 'Create Event', 'Create Event', CalendarIcon],
      ['/#nature', 'Create Nature', 'Create Nature', EmojiNatureIcon],
      ['/#idea', 'Create Idea', 'Create Idea', EmojiObjectsIcon],
      ['/#travel', 'Create Travel Plans', 'Create Travel Plans', EmojiTravelIcon],
    ],
  },
  {
    title: 'Group with title',
    items: [
      ['/#branch', <span>Create a <strong>Bitbucket branch</strong></span>, 'Bitbucket branch', BitbucketBranchesIcon],
      ['/#page', <span>Create a <strong>Confluence page</strong></span>, 'Confluence page', PageIcon],
    ],
  },
];

export default class CreateDrawer extends Component {
  static propTypes = {
    onItemClicked: PropTypes.func,
  };

  render() {
    return (
      <div>
        {
          createItems.map(itemGroup => {
            return (
              <DrawerItemGroup key={itemGroup.title} title={itemGroup.title}>
                {
                  itemGroup.items.map(item => {
                    const [url, text, label, Icon] = item;
                    return (
                      <DrawerItem
                        key={url}
                        href={url}
                        elemBefore={<Icon label={label}/>}
                        onClick={this.props.onItemClicked}
                      >
                        {text.valueOf()}
                      </DrawerItem>
                    );
                  })
                }
              </DrawerItemGroup>
            )
          })
        }
      </div>
    )
  };
}
