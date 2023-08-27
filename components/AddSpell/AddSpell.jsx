"use client";
import style from "./AddSpell.module.css";
import generateSpellID from "@/utils/generateSpellID";
import { setDoc, doc } from "firebase/firestore";
import firestore from "@/firebase/firestore";
import useSpell from "@/hooks/useSpell";

const db = firestore();

export default function AddSpell({ sid }) {
  const minValue = 0;
  const maxValue = 10;

  const [spell, baseCost, extraCost] = useSpell(sid);

  async function handleSubmit(event) {
    event.preventDefault();

    const spell_id = generateSpellID(event.target[0].value);
    const schools = [];
    const base_cost = [];
    const extra_cost = [];

    for (let i = 0; i < 6; i++) {
      if (event.target[i + 5].value > 0) {
        schools.push(event.target[i + 5].name);
        base_cost.push({ school: event.target[i + 5].name, amount: event.target[i + 5].value });
      };

      if (event.target[i + 11].value > 0) {
        extra_cost.push({ school: event.target[i + 11].name, amount: event.target[i + 11].value });
      };
    };
    
    const newSpell = {
      name: event.target[0].value,
      synopsis: event.target[1].value,
      range: event.target[2].value,
      duration: event.target[3].value,
      casting_time: event.target[4].value,
      base_cost,
      extra_cost,
      schools,
    };

    const docRef = doc(db, "spells", spell_id);
    await setDoc(docRef, newSpell);

    console.log(newSpell, spell_id);
  };

  return (
    <form className={style.main} onSubmit={handleSubmit}>
      <h2>Basics</h2>
      <label>Name</label>
      <input placeholder="New Spell Name" required name="spell_name" defaultValue={spell.name ?? ""}></input>

      <label>Synopsis</label>
      <textarea placeholder="Synopsis" required name="spell_synopsis" defaultValue={spell.synopsis ?? ""}></textarea>
      
      <h2>Details</h2>
      <div className={style.details}>
        <label>Range</label>
        <input placeholder="Range" name="spell_range" required defaultValue={spell.range ?? ""}></input>
        
        <label>Duration</label>
        <input placeholder="Duration" name="spell_duration" required defaultValue={spell.duration ?? ""}></input>
        
        <label>Casting Time</label>
        <input placeholder="Casting Time" name="spell_cast_time" defaultValue={spell.casting_time ?? ""}></input>
      </div>
      
      <h2>Base Cost</h2>
      <div className={style.schools}>
        <label htmlFor="school_purple">Purple</label>
        <input type="number" defaultValue={baseCost?.purple} min={minValue} max={maxValue} name="purple" id="school_purple"></input>
        
        <label htmlFor="school_green">Green</label>
        <input type="number" defaultValue={baseCost?.green} min={minValue} max={maxValue} name="green" id="school_green"></input>
        
        <label htmlFor="school_purple">Red</label>
        <input type="number" defaultValue={baseCost?.red} min={minValue} max={maxValue} name="red" id="school_red"></input>
        
        <label htmlFor="school_green">Black</label>
        <input type="number" defaultValue={baseCost?.black} min={minValue} max={maxValue} name="black" id="school_black"></input>
        
        <label htmlFor="school_purple">White</label>
        <input type="number" defaultValue={baseCost?.white} min={minValue} max={maxValue} name="white" id="school_white"></input>
        
        <label htmlFor="school_green">Grey</label>
        <input type="number" defaultValue={baseCost?.grey} min={minValue} max={maxValue} name="grey" id="school_grey"></input>
      </div>

      <h2>Extra Cost</h2>
      <div className={style.schools}>
        <label>Purple</label>
        <input type="number" defaultValue={extraCost?.purple} min={minValue} max={maxValue} name="purple"></input>
        
        <label>Green</label>
        <input type="number" defaultValue={extraCost?.green} min={minValue} max={maxValue} name="green"></input>
        
        <label>Red</label>
        <input type="number" defaultValue={extraCost?.red} min={minValue} max={maxValue} name="red"></input>
        
        <label>Black</label>
        <input type="number" defaultValue={extraCost?.black} min={minValue} max={maxValue} name="black"></input>
        
        <label>White</label>
        <input type="number" defaultValue={extraCost?.white} min={minValue} max={maxValue} name="white"></input>
        
        <label>Grey</label>
        <input type="number" defaultValue={extraCost?.grey} min={minValue} max={maxValue} name="grey"></input>
      </div>

      <button type="submit">Add Spell</button>
    </form>
  )
}

// TODO: add a page for editing spells. and edit button to spells
// TODO: change firestore database to use random ids for items