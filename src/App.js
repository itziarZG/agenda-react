import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateEvents from "./components/CreateEvents";
import ListEvents from "./components/ListEvents";
import InfoDetailEvent from "./components/InfoDetailEvent";
import Footer from "./components/Footer";

function App() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("timekids-user"));
    if (user) {
      setUserData(user);
    }
  }, []);

  return (
    <div className="App">
      <Header userData={userData} />
      <Switch>
        <Route exact path="/">
          <ListEvents userId={userData.id} />
        </Route>
        <Route exact path="/events">
          <Redirect to="/" />
        </Route>

        <Route path="/signIn">
          <SignIn setUserData={setUserData} />
        </Route>
        <Route path="/signUp">
          <SignUp setUserData={setUserData} />
        </Route>
        <Route path="/createEvents">
          <CreateEvents userId={userData.id} />
        </Route>
        <Route path="/eventDetail/:id">
          <InfoDetailEvent />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
