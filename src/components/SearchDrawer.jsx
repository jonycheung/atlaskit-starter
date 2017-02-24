import React from "react";
import {AkContainerItemGroup, AkDrawerItem} from "@atlaskit/navigation";


export default (
    <div>
        <AkContainerItemGroup>
            <AkDrawerItem
                icon={<EmojiObjectsIcon />}
                text="Create item 1"
            />
            <AkDrawerItem
                icon={<EmojiNatureIcon />}
                text="Create item 2"
            />
            <AkDrawerItem
                icon={<EmojiObjectsIcon />}
                text="Create item 3"
            />
            <AkDrawerItem
                icon={<EmojiTravelIcon />}
                text="Create item 4"
            />
        </AkContainerItemGroup>
        <AkContainerItemGroup>
            <AkDrawerItem
                icon={<ExpandIcon />}
                text="See more"
            />
        </AkContainerItemGroup>
        <AkContainerItemGroup title="Group with title">
            <AkDrawerItem
                icon={<BitbucketBranchesIcon />}
                text={<span>Create a <strong>Bitbucket branch</strong></span>}
            />
            <AkDrawerItem
                icon={<PageIcon />}
                text={<span>Create a <strong>Confluence page</strong></span>}
            />
        </AkContainerItemGroup>
    </div>
);
