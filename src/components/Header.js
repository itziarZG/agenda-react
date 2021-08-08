import { useRouter } from "next/router";
import Link from "next/link";
import storage from "../utils/localStorage";
import userData from "hooks/useUser.js";

export default function Header() {
  const history = useRouter();

  function logout() {
    storage.wipeUser();
    history.go(0);
  }

  function renderSign() {
    return (
      <>
        <Link href="/signIn">
          <button className="header_signIn btn">Sign in</button>
        </Link>
        <Link href="/signUp">
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
        <Link href="/createEvents">
          <button className="header_create_event btn">Crear evento</button>
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

        {userData === "" ? renderSign() : renderLogueado()}
      </div>
    </>
  );
}
