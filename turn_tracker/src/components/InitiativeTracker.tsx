import React, { useState } from "react";
import CreatureList from "./CreatureList";

type Creature = {
  id: number;
  name: string;
  initiative: number;
  hp: number;
};

export default function InitiativeTracker() {
  const [creatures, setCreatures] = useState<Creature[]>([
    { id: 1, name: "Goblin", initiative: 15, hp: 10 },
    { id: 2, name: "Orc", initiative: 12, hp: 20 },
    { id: 3, name: "Wizard", initiative: 18, hp: 8 },
  ]);

  const updateCreature = (id: number, field: keyof Creature, value: number) => {
    setCreatures(prev =>
      prev.map(c => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Turn Tracker</h2>
      <CreatureList creatures={creatures} onUpdate={updateCreature} />
    </div>
  );
}
