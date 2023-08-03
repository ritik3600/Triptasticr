import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [city,setCity]=useState("");

  return (
    <UserContext.Provider value={{ user, setUser,city,setCity }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
