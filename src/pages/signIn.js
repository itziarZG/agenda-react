import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import IconReset from "components/icons/IconReset.js";
import Head from "next/head";
import useUser from "hooks/useUser.js";
import useField from "hooks/useField.js";

const SignIn = () => {
  const userNameField = useField({ type: "text", name: "username" });
  const passwordField = useField({ type: "password", name: "password" });
  const [errorMessage, setErrorMessage] = useState("");

  const {
    login,
    // userData: { userId },
  } = useUser();
  const history = useRouter();

  function handleFormSignIn(ev) {
    ev.preventDefault();

    login(userNameField.value, passwordField.value)
      .then((resp) => {

        if (resp.status === 200) {
          history.push("/");
        } else {
          setErrorMessage(resp.message);
          setTimeout(() => setErrorMessage(""), 3000);
        }
      })
  }

  return (
    <>
      <Head>
        <title>Agenda Peques - Iniciar sesión</title>
        <meta
          property="og:title"
          content="Agenda Peques - Iniciar sesión"
          key="title"
        />
        <meta
          property="og:description"
          name="description"
          content="Inicia sesión en la página más dicharachera para ver los eventos para niños y niñas en Ibiza"
          key="description"
        />
      </Head>
      <Link href="/">
        <a style={{ textDecoration: "none" }}>
          <IconReset className="reset_info_signIn" />
        </a>
      </Link>
      <div className="signIn">
        <div className="sigIn_form">
          <h2 className="title_signIn">Sign in</h2>
          <form className="signIn_form" onSubmit={handleFormSignIn}>
            <label htmlFor="name" className="form_label">
              Email Address
            </label>
            <input
              {...userNameField}
              placeholder="Enter your name"
              className="form_input"
            />
            <label htmlFor="name" className="form_label">
              Password
            </label>
            <input
              {...passwordField}
              placeholder="Enter your password"
              className="form_input"
            />
            <input type="submit" value="Sign in" className="signIn_btn" />
          </form>
        </div>
        {errorMessage !== "" ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <></>
        )}

        <div className="signIn-img">
          <div className="signIn_img_rocket"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
