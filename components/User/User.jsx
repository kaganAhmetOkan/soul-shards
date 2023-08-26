"use client";
import style from "./User.module.css";
import signIn, { logOut } from "@/firebase/auth";
import { useAuthContext } from "@/firebase/AuthContext";
import Image from "next/image";

export default function User({ isActive }) {
  const { user } = useAuthContext();

  function handleClick() {
    if (!user) signIn()
    else logOut();
  };

  return (
    <div className={style.main} data-active={isActive} onClick={handleClick} title={user ? "Sign Out" : "Sign In"}>
      <div className={style.img}>
        <Image src={user?.photoURL ?? "/images/default-user.png"} fill alt={user?.displayName} />
      </div>
      <div className={style.title}>
        {user?.displayName ?? "Sign In"}
      </div>
    </div>
  );
};