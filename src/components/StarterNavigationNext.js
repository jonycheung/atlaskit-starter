import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router';

import {
  ContainerHeader,
  GroupHeading,
  HeaderSection,
  Item,
  ItemAvatar,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  Separator,
  Wordmark
} from "@atlaskit/navigation-next";

import GlobalNavigation from "@atlaskit/global-navigation";
import { AtlassianIcon, AtlassianWordmark } from "@atlaskit/logo";
import Drawer from '@atlaskit/drawer';


import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import GearIcon from '@atlaskit/icon/glyph/settings';

import CreateDrawer from '../components/CreateDrawer';
import SearchDrawer from '../components/SearchDrawer';
import atlaskitLogo from '../images/atlaskit.png';

const SearchTooltip = () => (
  <div css={{ background: 'red' }}> Search Tooltip</div>
);


const MyProductNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ className }:ClassObjectInterface) => (
        <div className={className}>
          <Wordmark wordmark={AtlassianWordmark} />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }:ClassObjectInterface) => (
        <div className={className}>
          <Item text="Dashboard" />
          <Item text="Things" />
          <Item text="Settings" />
          <Separator />
          <GroupHeading>Add-ons</GroupHeading>
          <Item text="My plugin" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);


const MyContainerNavigation = (state, router) => (
  <Fragment>
    <HeaderSection>
      {({ css }) => (
        <div style={{...css }}>
          <ContainerHeader
            before={itemState => (
              <ItemAvatar
                itemState={itemState}
                appearance="square"
                size="large"
                src={atlaskitLogo}
                alt="atlaskit logo"
              />
            )}
            text="Atlaskit"
            subText="Sample project"
          />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }) => (
        <div className={className}>
          { 
            state.navLinks.map(link => {
              const [url, title, Icon] = link;
              return (
                <Link key={url} to={url}>
                  <Item
                    icon={<Icon label={title} size="medium" />}
                    text={title}
                    isSelected={router.isActive(url)}
                  />
                </Link>
              );
            }, this)
          }
        </div>
      )}
      
    </MenuSection>
  </Fragment>
);

export default class StarterNavigationNext extends React.Component {
  state = {
    navLinks: [
      ['/', 'Home', DashboardIcon],
      ['/settings', 'Settings', GearIcon],
    ]
  };

  MyGlobalNavigation = () => (
    <GlobalNavigation 
      productIcon={AtlassianIcon} 
      productHref="#"
      searchTooltip={<SearchTooltip />}
      searchLabel="Search Label"
      onProductClick={() => this.openDrawer('product')}
      onCreateClick={() => this.openDrawer('create')}
      onSearchClick={() => this.openDrawer('search')} />
  );

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object
  };

  openDrawer = (openDrawer) => {
    console.log(this.state)
    this.setState({ openDrawer });
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };
  
  render(){
    return (
      <div>
        <NavigationProvider>
          <LayoutManager
            globalNavigation={this.MyGlobalNavigation}
            productNavigation={MyProductNavigation}
            containerNavigation={ () => MyContainerNavigation(this.state, this.context.router) }
          />
        </NavigationProvider>
        <Drawer
          onClose={() => this.openDrawer(null)}
          onCloseComplete={this.onCloseComplete}
          onOpenComplete={this.onOpenComplete}
          isOpen={this.state.openDrawer === "search"}
          width="wide"
        >
          <SearchDrawer
            onResultClicked={() => this.openDrawer(null)}
            onSearchInputRef={(ref) => {
              this.searchInputRef = ref;
            }}
          />
        </Drawer>
        <Drawer
          onClose={() => this.openDrawer(null)}
          onCloseComplete={this.onCloseComplete}
          onOpenComplete={this.onOpenComplete}
          isOpen={this.state.openDrawer === "create"}
          width="wide"
        >
          <CreateDrawer
            onItemClicked={() => this.openDrawer(null)}
          />
        </Drawer>
      </div>
    )
  }
}