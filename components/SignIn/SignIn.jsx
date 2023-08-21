"use client";
import signIn from "@/firebase/auth";
import { useAuthContext } from "@/firebase/AuthContext";
import { useEffect } from "react";

export default function SignIn() {
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) signIn();
  }, [user]);

  console.log(user);

  return (
    <div style={{display: "none"}}></div>
  );
};