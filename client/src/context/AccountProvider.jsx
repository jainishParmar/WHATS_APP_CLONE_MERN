import React from 'react'
import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';


export const AccountContext = createContext(null);

function AccountProvider({ children }) {

  const [account, setAccount] = useState();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const [activeUsers, setActiveUsers] = useState([]);

  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io('ws://localhost:9000');
  }, [])

  return (
    <div>
      <AccountContext.Provider value={{
        account,
        setAccount,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag


      }}>
        {children}
      </AccountContext.Provider>

    </div>
  )
}

export default AccountProvider
