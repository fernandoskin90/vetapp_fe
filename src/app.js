// @vendors
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// @constants
import { routes, routePaths } from '@src/constants';

// @context
import { SessionContextProvider } from '@src/context';

// @pages
import Home from '@pages/home';
import Login from '@pages/login';

// @components
import PrivatePage from '@components/private-page';

// @hooks
import { useUser } from '@hooks/useUser';

function App() {
  const userInfo = useUser();
  const { loading, login } = userInfo;

  useEffect(() => {
    login();
  }, []);

  if (loading) {
    return <h1>Checking session ...</h1>;
  }

  return (
    <Router>
      <SessionContextProvider value={userInfo}>
        <div className="app">
          <Switch>
            <Route
              {...routes.home}
            >
              <PrivatePage><Home /></PrivatePage>
            </Route>
            <Route
              {...routes.login}
            >
              <Login />
            </Route>
            <Route path="*">
              <Redirect to={routePaths.login} />
            </Route>
          </Switch>
        </div>
      </SessionContextProvider>
    </Router>
  );
}

render(<App />, document.querySelector('#app'));