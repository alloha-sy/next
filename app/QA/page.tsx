"use client";
import useQA from "./useQA";

export default function Qa() {
  const [QA, setQA] = useQA();
  return <p>{QA.map((x) => x.q)}</p>;
}
