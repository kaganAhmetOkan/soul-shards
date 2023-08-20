import style from "./Spells.module.css";
import Spell from "../Spell/Spell";

export default function Spells({ spells }) {
  return (
    <div className={style.main}>
      <h1>Spells</h1>
      {spells.map(spell => <Spell spell={spell} key={spell.name} />)}
    </div>
  );
};