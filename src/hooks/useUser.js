import { useEffect, useState } from "react";
import storage from "utils/localStorage.js";
import { signUp, signIn } from "utils/api";

export default function useUser() {
  const [userData, setUserData] = useState({ userId: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("timekids-user"));
    if (user) {
      setUserData(user);
    }
  }, []);

  console.log("useUser executed");

  const register = (userName, password) => {
    console.log("register", { userName, password });
    return signUp(userName, password).then((resp) => {
      if (resp.user) {
        console.log("en signup", { resp });
        const { email, id } = resp.user;
        const userData = { id, email };
        setUserData(userData);
        storage.setUser(userData);
      } else return resp.error;
    });
  };
  const login = (userName, password) => {
    console.log("login", { userName, password });
    return signIn(userName, password).then((resp) => {
      if (resp.data != null) {
        console.log("en signIn", { resp });
        const { email, id } = resp.user;
        const userData = { id, email };
        setUserData(userData);
        storage.setUser(userData);
      } else {
        return resp.error;
        // Error mostrarlo con toast
      }
    });
  };

  return {
    register,
    login,
    userData,
  };
}
