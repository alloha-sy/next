"use client";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@/app/_firebase/config";
import { useEffect, useState } from "react";

export default function useQA() {
  const db = getFirestore(app);
  const [QA, setQA] = useState<{ q: string; a: number }[]>([]);
  const qaRef = collection(db, "QA");

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const data = await getDocs(qaRef);
        const list = data.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setQA(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQA();
  }, [db]);
  return [QA, setQA] as const;
}
