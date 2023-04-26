import { Dispatch, SetStateAction, createContext, useState } from "react";

export const AuthContext = createContext<{
  getToken: () => string;
  removeToken: () => void;
  storeToken: (newToken: string) => void;
  available: number;
  setAvailable: Dispatch<SetStateAction<number>>;
}>(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState<string>("");
  // default mock pin
  const [pin, setPin] = useState<string>("4321");
  const [available, setAvailable] = useState<number>(null);

  const storeToken = (newToken: string) => {
    setToken(newToken);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", newToken);
    }
  };

  const removeToken = () => {
    setToken("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  const getToken = () => {
    if (token) return token;
    if (typeof window !== "undefined") {
      const retrievedToken = localStorage.getItem("token");
      if (retrievedToken) setToken(retrievedToken);
      return retrievedToken;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        getToken,
        removeToken,
        storeToken,
        available,
        setAvailable,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
