import React, { useEffect, useState } from "react";
import { useRouter}from "next/router";
import Link from "next/link";
import IconReset from "components/icons/IconReset.js";
import { signUp } from "utils/api";
import storage from "utils/localStorage";
import Head from 'next/head';
import useUser from 'hooks/useUser.js'

const SignUp = () => {
  const {register} = useUser()
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useRouter();

  //añadir nombre usuario?
  function handleUserName(ev) {
    //comprobar mail válido
    setUserName(ev.target.value);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
  }

  function handleConfirmPassword(ev) {
    setConfirmPassword(ev.target.value);
  }

  function handleFormSignUp(ev) {
    ev.preventDefault();
    if (password === confirmPassword) {
      register({userName, password}).then(() => {
        history.push("/")
      })
      .catch((error) => console.log(error));
    }
  }

  const disableButton =
    !userName || userName.length < 3 || !password || !confirmPassword;

  return (
    <>
      <Head>
        <title>Agenda Peques - Crear nueva cuenta</title>
        <meta name="description" content="Crea una cuenta para disfrutar de todos los servicios que te ofrece la página de Agenda Peques" />
      </Head>
      <Link href="/">
        <a style={{ textDecoration: "none" }}>
          <IconReset className="reset-Info-SignUp" />
        </a>
      </Link>
      <div className="signUp">
        <div className="sigIn_form">
          <h2 className="title_signUp">Sign Up</h2>
          <form className="form" onSubmit={handleFormSignUp}>
            <label htmlFor="name" className="form_label">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form_input"
              onChange={handleUserName}
            />
            <label htmlFor="name" className="form_label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form_input"
              onChange={handlePassword}
            />
            <label htmlFor="confirmPassword" className="form_label">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form_input"
              placeholder="Enter your password"
              onChange={handleConfirmPassword}
            />
            <input
              type="submit"
              value="Sign up"
              className="signUp_btn js-SignIn"
              disabled={disableButton}
            />
          </form>
        </div>
        <div className="signUp_img">
          <div className="signUp_img_globe"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
