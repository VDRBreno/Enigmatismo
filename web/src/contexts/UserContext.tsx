import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface UserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: UserContextProviderProps) {

  const [user, setUser] = useState<string>(localStorage.getItem('username') || '');
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if(user) localStorage.setItem('username', user);
    else localStorage.removeItem('username');
  }, [user]);

  useEffect(() => {
    if(user)
      setAuthenticated(true);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}