import { useRouter } from "next/router";
import Link from "next/link";
import storage from "../utils/localStorage";
import useUser from "hooks/useUser.js";

export default function Header() {
  const history = useRouter();
  const {
    userData: { userId },
  } = useUser();
  console.log({ userId });
  function logout() {
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

        {userId === null ? renderSign() : renderLogueado()}
      </div>
    </>
  );
}
