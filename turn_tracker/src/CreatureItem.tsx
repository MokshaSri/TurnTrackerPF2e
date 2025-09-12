import React from "react";

type Creature = {
  id: number;
  name: string;
  initiative: number;
  hp: number;
};

type CreatureItemProps = {
  creature: Creature;
  onUpdate: (id: number, field: keyof Creature, value: number) => void;
};

export default function CreatureItem({ creature, onUpdate }: CreatureItemProps) {
  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: "8px 12px",
        marginBottom: 8,
      }}
    >
      <strong>{creature.name}</strong>
      <div>
        Initiative:{" "}
        <input
          type="number"
          value={creature.initiative}
          onChange={e =>
            onUpdate(creature.id, "initiative", parseInt(e.target.value))
          }
        />
      </div>
      <div>
        HP:{" "}
        <input
          type="number"
          value={creature.hp}
          onChange={e =>
            onUpdate(creature.id, "hp", parseInt(e.target.value))
          }
        />
      </div>
    </li>
  );
}
