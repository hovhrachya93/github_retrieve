import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Route from 'routes';
import history from 'utils/browser-history';

const InfoContainer = lazy(() => import('containers/Info'));
const Main = lazy(() => import('containers/Main'));

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Suspense fallback=''>
            <Switch>
              <Route path='/info' component={InfoContainer} />
              <Route path='/' component={Main} />
            </Switch>
          </Suspense>
        </Router>
      </BrowserRouter>
    );
  }
}

export default Routes;
