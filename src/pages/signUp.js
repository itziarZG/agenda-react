import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import IconReset from "components/icons/IconReset.js";

import Head from "next/head";
import useUser from "hooks/useUser.js";
import useField from "hooks/useField.js";

const SignUp = () => {
  const { register } = useUser();
  const userNameField = useField({ type: "text", name: "username" });
  const userPasswField = useField({ type: "password", name: "userpassw" });
  const confirmPasswField = useField({
    type: "password",
    name: "confirmpassw",
  });

  const [error, setErrorMessage] = useState("");

  const history = useRouter();

  function handleFormSignUp(ev) {
    ev.preventDefault();
    console.log({ userPasswField }, { userNameField });
    if (userPasswField.value === confirmPasswField.value) {
      console.log({ userNameField, userPasswField });
      register(userNameField.value, userPasswField.value)
        .then(() => {
          history.push("/");
        })
        .catch((error) => {
          setErrorMessage(error.msg);
          setTimeout(() => setErrorMessage(""), 3000);
        });
    } else {
      setErrorMessage("Passwords Diferentes");

      setTimeout(() => setErrorMessage(""), 3000);
    }
  }

  // const disableButton =
  //   !userNameField ||
  //   userNameField.length < 3 ||
  //   !userPasswField ||
  //   !confirmPassword;

  return (
    <>
      <Head>
        <title>Agenda Peques - Crear nueva cuenta</title>
        <meta
          name="description"
          content="Crea una cuenta para disfrutar de todos los servicios que te ofrece la página de Agenda Peques"
        />
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
              {...userNameField}
              placeholder="Enter your name"
              className="form_input"
            />
            <label htmlFor="name" className="form_label">
              Password
            </label>
            <input
              {...userPasswField}
              placeholder="Enter your password"
              className="form_input"
            />
            <label htmlFor="confirmPassword" className="form_label">
              Confirm password
            </label>
            <input
              {...confirmPasswField}
              className="form_input"
              placeholder="Enter your password"
            />
            <input
              type="submit"
              value="Sign up"
              className="signUp_btn js-SignIn"
              // disabled={disableButton}
            />
          </form>
          {error !== "" ? <p style={{ color: "red" }}>{error}</p> : <></>}
        </div>
        <div className="signUp_img">
          <div className="signUp_img_globe"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
