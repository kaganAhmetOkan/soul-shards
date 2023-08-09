"use client";
import style from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";
import NavButton from "../NavButton/NavButton";
import { useState } from "react";
import iconSpells from "@/public/spells.png";
import iconHome from "@/public/home.png";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  
  function handleClick(event) {
    if (event.target.id.includes("menu-button")) {
      setActive(!isActive);
    };
  };

  return (
    <nav className={style.main} data-active={isActive} onClick={handleClick}>
      <MenuButton isActive={isActive} />
      <NavButton icon={iconHome} alt="Home" isActive={isActive} href="/">Home</NavButton>
      <NavButton icon={iconSpells} alt="Spells" isActive={isActive} href="/shards">Soul Shards</NavButton>
    </nav>
  );
};

// TODO: <a href="https://www.flaticon.com/free-icons/myth" title="myth icons">Myth icons created by Freepik - Flaticon</a>