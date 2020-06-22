import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { SessionContext } from '@src/context';
import { routePaths } from '@src/constants';

export default function PrivatePage({ children }) {
  const { user } = useContext(SessionContext);

  if (!user) {
    return <Redirect to={routePaths.login} />;
  }

  return children;
}
