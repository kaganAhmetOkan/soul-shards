import firestore from "@/firebase/firestore";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = firestore();

export default function useSpells(school) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "spells"), where("schools", "array-contains", school));
    const unsub = onSnapshot(q, snapshot => {
      const array = [];

      snapshot.forEach(doc => {
        // doc.data() here as a function, otherwise data will be unreadable
        array.push(doc.data());
      });

      setSpells(array);
    });

    return () => unsub();
  }, [school]);

  return spells;
};