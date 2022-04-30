import { useState, useEffect, createContext } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState([])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("timekids-user"));

        if (user) {
            // setUserData(user);
            setUser(user);

        }
    }, []);
    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export default Context;