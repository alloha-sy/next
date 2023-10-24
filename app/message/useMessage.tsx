"use client";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "@/app/_firebase/config";
import { useEffect, useState } from "react";
import { qaForm } from "@/lib/data";

export default function useMessageQA() {
  const db = getFirestore(app);
  const [messageQa, setMessageQA] = useState<qaForm>();
  const messageQaRef = collection(db, "QA");

  useEffect(() => {
    const createQA = async () => {
      try {
        await addDoc(messageQaRef, {
          question: messageQa.question,
          answer: messageQa.answer,
          qaAskTime: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    };
    createQA();
  }, [db]);
  return [messageQa, setMessageQA] as const;
}
