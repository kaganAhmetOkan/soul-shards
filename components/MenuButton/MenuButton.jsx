"use client";
import style from "./MenuButton.module.css";
import { useState } from "react";

export default function MenuButton() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
  };
  
  return (
    <div id="menu-button" className={style.main} data-active={isActive} onClick={handleClick}>
      <div id="menu-button-top" className={style.top}></div>
      <div id="menu-button-mid" className={style.mid}></div>
      <div id="menu-button-bot" className={style.bot}></div>
    </div>
  );
};