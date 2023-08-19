"use client";
import style from "./Spell.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Spell({ spell }) {
  const [enlarged, setEnlarged] = useState(false);
  const params = useParams();

  return (
    <div className={style.main} data-enlarged={enlarged} data-color={params.shard}>
      <div className={style.titleBar} onClick={() => setEnlarged(!enlarged)}>
        <h2>{spell.name}</h2>
        <div className={style.costs}>
          {spell.base_cost.map(baseCost => {
            return (
              <div className={style.cost} key={baseCost.amount + baseCost.school} data-color={baseCost.school}>
                {baseCost.amount}
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.details}>
        <p className={style.synopsis}>{spell.synopsis}</p>
        <div>{`Range: ${spell.range} feet`}</div>
        <div>{`Duration: ${spell.duration}`}</div>
      </div>
    </div>
  );
};