"use client";
import style from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";
import NavButton from "../NavButton/NavButton";
import { useState } from "react";
import iconSpells from "@/public/spells.png";

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
      <NavButton icon={iconSpells} alt="Spells" isActive={isActive} href="/schools">Spell Schools</NavButton>
    </nav>
  );
};

// TODO: <a href="https://www.flaticon.com/free-icons/myth" title="myth icons">Myth icons created by Freepik - Flaticon</a>