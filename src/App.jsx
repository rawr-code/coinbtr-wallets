import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Styles
import './styles/resets.scss';

// Views
import { LoginView, WalletsView } from './views';

const App = ({ userToken }) => {
  if (userToken) {
    console.log('your token', userToken);
  }

  let routes = null;

  if (userToken) {
    routes = (
      <Switch>
        <Route exact path="/" component={WalletsView} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <BrowserRouter>{routes}</BrowserRouter>;
};

const mapStateToProps = ({ auth: { userToken } }) => ({
  userToken
});

export default connect(mapStateToProps)(App);
