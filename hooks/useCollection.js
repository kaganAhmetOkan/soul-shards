import firestore from "@/firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = firestore();

export default function useCollection(colName) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, colName));
    const unsub = onSnapshot(q, snapshot => {
      const array = [];

      snapshot.forEach(doc => {
        // doc.data() here as a function, otherwise data will be unreadable
        array.push(doc.data());
      });

      setItems(array);
    });

    return () => unsub();
  }, [colName]);

  return items;
};