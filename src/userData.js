// UserContext.js
import React, { createContext, useState } from 'react';

export const UserData = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserData.Provider value={{ user, setUser }}>
            {children}
        </UserData.Provider>
    );
};