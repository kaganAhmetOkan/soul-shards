"use client";
import style from "./Navbar.module.css";
import MenuButton from "../MenuButton/MenuButton";
import NavButton from "../NavButton/NavButton";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import User from "../User/User";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const [color, setColor] = useState("default");
  const path = usePathname();

  function handleClick(event) {
    if (event.target.id.includes("menu-button")) {
      setActive(!isActive);
    };
  };

  useEffect(() => {
    if (path.includes("/shards/")) {
      setColor(path.substring(8));
    } else {
      setColor("default");
    };
  }, [path]);

  return (
    <nav className={style.main} data-active={isActive} data-color={color} onClick={handleClick}>
      <div className={style.container}>
        <MenuButton isActive={isActive} />
        <NavButton icon="/images/home.png" alt="Home" isActive={isActive} href="/">Home</NavButton>
        <NavButton icon="/images/spells.png" alt="Spells" isActive={isActive} href="/shards">Soul Shards</NavButton>
        <div className={style.spacer}></div>
        <User isActive={isActive} />
      </div>
    </nav>
  );
};

// TODO: <a href="https://www.flaticon.com/free-icons/myth" title="myth icons">Myth icons created by Freepik - Flaticon</a>