import React from "react";
import CreatureItem from "./CreatureItem";

type Creature = {
  id: number;
  name: string;
  initiative: number;
  hp: number;
};

type CreatureListProps = {
  creatures: Creature[];
  onUpdate: (id: number, field: keyof Creature, value: number) => void;
};

export default function CreatureList({ creatures, onUpdate }: CreatureListProps) {
  const sorted = [...creatures].sort((a, b) => b.initiative - a.initiative);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {sorted.map(c => (
        <CreatureItem key={c.id} creature={c} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
