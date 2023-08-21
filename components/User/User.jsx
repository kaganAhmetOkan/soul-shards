"use client";
import style from "./User.module.css";
import signIn from "@/firebase/auth";
import { useAuthContext } from "@/firebase/AuthContext";
import { useEffect } from "react";
import Image from "next/image";

export default function User({ isActive }) {
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) signIn();
  }, [user]);

  console.log(user);

  return (
    <div className={style.main} data-active={isActive}>
      <div className={style.img}>
        <Image src={user?.photoURL ?? "/images/default-user.png"} fill alt={user?.displayName} />
      </div>
      <div className={style.title}>
        {user?.displayName}
      </div>
    </div>
  );
};