"use client";
import style from "./MenuButton.module.css";
import { useState } from "react";

export default function MenuButton() {
  const [isActive, setActive] = useState(false);
  
  return (
    <div className={style.main} data-active={isActive} onClick={() => setActive(!isActive)}>
      <div className={style.top}></div>
      <div className={style.mid}></div>
      <div className={style.bot}></div>
    </div>
  );
};