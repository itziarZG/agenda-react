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

  // console.log("useUser executed");

  const register = (userName, password) => {
    
    return signUp(userName, password).then((resp) => {
      if (resp.user) {
        const { email, id } = resp.user;
        const userData = { userId: id, email };
        setUserData(userData);
        storage.setUser(userData);
        return {status:200}
      } else return resp.error;
    });
  };
  const login = (userName, password) => {
    return signIn(userName, password).then((resp) => {
      console.log({resp})
      if (resp.data != null) {
        const { email, id } = resp.user;
        const userData = { userId: id, email };
        setUserData(userData);
        storage.setUser(userData);
        return {status:200}
      } else {
        return resp.error;
        // Error mostrarlo con toast
      }
    });
  };
  // console.log({ userData });
  return {
    register,
    login,
    userData,
  };
}
