import { useRouter } from "next/router";
import { useContext } from 'react';
import Link from "next/link";
import storage from "../utils/localStorage";
import userContext from "context/userContext";

export default function Header() {
  const history = useRouter();

  const { user, setUser } = useContext(userContext)

  function logout() {
    setUser({ userId: null });
    storage.wipeUser();
    history.replace("/");
  }

  function renderSign() {
    return (
      <>
        <Link href="/signIn">
          <a className="header_signIn btn">Log in</a>
        </Link>
        <Link href="/signUp">
          <a className="header_signUp btn">Register</a>
        </Link>
        <Link href="/info">
          <a className="header_link">Info</a>
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
        <Link href="/createEvents/new">
          <a className="header_create_event btn">Crear evento</a>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="header">
        <Link href="/">
          <a className="header_logo_container">
            <div className="header_logo"></div>
          </a>
        </Link>

        {user.length === 0 || user.userId === null ? renderSign() : renderLogueado()}
      </div>
    </>
  );
}
