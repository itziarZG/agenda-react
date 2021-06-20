import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./SignIn.css";
import IconReset from "../components/img/IconReset.js";
import { signIn } from "../utils/api";
import storage from "../utils/localStorage";

const SignIn = ({ setUserData }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  function handleUserName(ev) {
    setUserName(ev.target.value);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
  }

  function handleFormSignIn(ev) {
    ev.preventDefault();
    signIn(userName, password)
      .then((resp) => {
        if (resp.error) {
          console.log("error");
          setErrorMessage(resp.error.message);
          setTimeout(() => setErrorMessage(""), 3000);
        } else {
          const userData = {
            email: resp.user.email,
            id: resp.user.id,
            acces_token: resp.data.access_token,
            //que más necesitaré????
          };
          setUserData(userData);
          storage.setUser(userData);
          history.push("/");
        }
      })
      .catch((error) => console.error({ error }));
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <IconReset className="reset_info_signIn" />
      </Link>
      <div className="signIn">
        <div className="sigIn_form">
          <h2 className="title_signIn">Sign in</h2>
          <form className="signIn_form" onSubmit={handleFormSignIn}>
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
