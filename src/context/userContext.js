import { useState, createContext } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState([])

    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export default Context;