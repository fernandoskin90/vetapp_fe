// @vendors
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

// @context
import { SessionContext } from '@src/context';

// @constants
import { routePaths } from '@src/constants';

export default function Login() {
  const { login, user } = useContext(SessionContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (user) {
    return <Redirect to={routePaths.home} />;
  }


  const handleLogin = () => {
    if (username && password) {
      login({ username, password });
    }
  };

  return (
    <div className="login">
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <button
        disabled={!username || !password}
        onClick={handleLogin}
        type="button"
      >
        Login
      </button>
    </div>
  );
}