// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './styles.scss';

export default function Header({ logout, username }) {
  return (
    <header className="header">
      {
        username && (
          <span>{username}</span>
        )
      }
      <button
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </header>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string
};

Header.defaultProps = {
  username: ''
};
