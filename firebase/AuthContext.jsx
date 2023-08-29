"use client";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "./config";
import { createContext, useContext, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      };
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};