"use client";

import Board from "@/components/board";
import Komadai from "@/components/komadai";

export default function Home() {
  return (
    <div className="fullGame">
      <Komadai />
      <Board />
      <Komadai />
    </div>
  );
}
