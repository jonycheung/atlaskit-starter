import React, { PureComponent, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import HomePage from '../pages/HomePage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import PullRequestsPage from '../pages/PullRequestsPage.jsx';

export default class MainRouter extends PureComponent {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 284,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  appWithPersistentNav = () => {
    return (props) => (
      <App
        onNavResize={this.onNavResize}
        {...props}
      />
    );
  }

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={this.appWithPersistentNav()}>
          <Route path="/" component={HomePage} />
          <Route path="/pull-requests" component={PullRequestsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Route>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
