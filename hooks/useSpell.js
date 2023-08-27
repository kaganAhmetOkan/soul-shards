import firestore from "@/firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = firestore();

export default function useSpell(sid) {
  const [spell, setSpell] = useState({});
  const [baseCost, setBaseCost] = useState({});
  const [extraCost, setExtraCost] = useState({});

  useEffect(() => {
    if (sid) {
      const docRef = doc(db, "spells", sid);
      const getSpell = async () => {
        const res = await getDoc(docRef);
        setSpell(res.data());
      };
      
      getSpell();
    };
  }, [sid]);

  useEffect(() => {
    if (spell.base_cost) {
      const bc = {};
      spell.base_cost.forEach(cost => bc[cost.school] = cost.amount);
      setBaseCost(bc);
    };

    if (spell.extra_cost) {
      const ec = {};
      spell.extra_cost.forEach(cost => ec[cost.school] = cost.amount);
      setExtraCost(ec);
    };
  }, [spell]);

  return [spell, baseCost, extraCost];
};