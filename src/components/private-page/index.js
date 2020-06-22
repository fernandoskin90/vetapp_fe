// @vendors
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// @component
import Header from '@components/header';

// @context
import { SessionContext } from '@src/context';

// @constants
import { routePaths } from '@src/constants';

// @styles
import './styles.scss';

export default function PrivatePage({ children }) {
  const { user, logout } = useContext(SessionContext);

  if (!user) {
    return <Redirect to={routePaths.login} />;
  }

  return (
    <div className="private-page">
      <Header logout={logout} username={user ? user.username : ''} />
      <section className="private-page__content">
        {children}
      </section>
    </div>
  );
}

PrivatePage.propTypes = {
  children: PropTypes.element.isRequired
};
