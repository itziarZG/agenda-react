import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import storage from '../utils/localStorage';
import './Header.css';

const Header = ({ userData }) => {
  const history = useHistory();

  function logout() {
    storage.wipeUser();
    history.go(0);
  }

  function renderSign() {
    return (
      <>
        <Link to="/signIn">
          <button className="header_signIn btn">Sign in</button>
        </Link>
        <Link to="/signUp">
          <button className="header_signUp btn">Sign up</button>
        </Link>
      </>
    );
  }

  function renderLogueado() {
    return (
      <>
        <button className="header_log_out" onClick={logout}>
          Sign out
        </button>
        <Link to="createEvents">
          <button className="header_create_event btn">Crear evento</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="header">
        <Link className="header_logo_container" to="/">
          <div className="header_logo"></div>
        </Link>

        {userData === '' ? renderSign() : renderLogueado()}
      </div>
    </>
  );
};

export default Header;
