"use client";
import style from "./Spells.module.css";
import Spell from "../Spell/Spell";
import useSpells from "@/hooks/useSpells";

export default function Spells({ school }) {
  const spells = useSpells(school);

  return (
    <div className={style.main}>
      <h1>Spells</h1>
      {spells.map(spell => <Spell spell={spell} key={spell.name} />)}
    </div>
  );
};