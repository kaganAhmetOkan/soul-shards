"use client";
import style from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  
  function handleClick(event) {
    if (event.target.id.includes("menu-button")) {
      setActive(!isActive);
    };
  };

  return (
    <nav className={style.main} data-active={isActive} onClick={handleClick}>
      <MenuButton />
    </nav>
  );
};