'use client'
import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";


export const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

  return (
    <AppContext.Provider value={{user,setUser}}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);