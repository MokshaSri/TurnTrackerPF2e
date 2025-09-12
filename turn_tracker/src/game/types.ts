// types.ts
export type Creature = {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  ac: number;          // armor class
  conditions: Condition[]; // e.g., "stunned", "poisoned"
  isPlayer: boolean;
};


export type Condition = {
    

}

export type Affliction = {

}



