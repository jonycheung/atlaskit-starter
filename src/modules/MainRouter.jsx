import React, { PureComponent } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import HomePage from '../pages/HomePage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import PullRequestsPage from '../pages/PullRequestsPage.jsx';

export default class MainRouter extends PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={HomePage} />
          <Route path="/pull-requests" component={PullRequestsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Route>
      </Router>
    );
  }
}
