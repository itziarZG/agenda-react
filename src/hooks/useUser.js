import {useCallback, useEffect, useState} from 'react'
import storage from 'utils/localStorage.js';

export default function useUser () {
  const [userData, setUserData] = useState({ userId: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("timekids-user"));
    if (user) {
      setUserData(user);
    }
  }, []);

  console.log('useUser executed')

  const register = ({userName, password}) => {
    return signUp(userName, password)
      .then((user) => {
        const {email, id} = user;
        const userData = {id, email}
        setUserData(userData);
        storage.setUser(userData)
      })
    }

  return {
    register,
    userData
  }
}

