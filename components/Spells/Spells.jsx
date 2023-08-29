"use client";
import style from "./Spells.module.css";
import Spell from "../Spell/Spell";
import useSpells from "@/hooks/useSpells";
import sortSpells from "@/utils/sortSpells";

export default function Spells({ school }) {
  const spells = useSpells(school);
  sortSpells(spells);
  const tiers = {};

  spells.forEach(spell => {
    if (spell.cantrip) {
      if (!Array.isArray(tiers.cantrips)) tiers.cantrips = [];
      tiers.cantrips.push(spell);
    } else {
      let costAmount = spell.tier ?? 0;
      if (costAmount === 0) spell.base_cost.forEach(cost => costAmount += Number.parseInt(cost.amount));
      if (!Array.isArray(tiers[`tier${costAmount}`])) tiers[`tier${costAmount}`] = [];
      tiers[`tier${costAmount}`].push(spell);
    };
  });

  return (
    <div className={style.main}>
      <h1>Spells</h1>
      {Object.keys(tiers).map(tier => {
        let tierName = tier;
        if (tierName !== "cantrips") tierName = tierName.replace("tier", "tier ");
        
        return (
          <div key={tier} className={style.tier}>
            <h2>{tierName}</h2>
            {tiers[tier].map(spell => <Spell spell={spell} key={spell.name} />)}
          </div>
        );
      })}
    </div>
  );
};

// TODO: remove the tier calculators in various scripts