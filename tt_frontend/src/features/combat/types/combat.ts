//A combat define the combatants and the turns of the combat

export type ActorType = 'pc' | 'npc';
export interface Character {
    id: string;
    name: string;
    actor_type: ActorType;
}
export interface Combatant {
    id: string;
    combat_id: string;
    character_id: string;
    order_index: number;
    character?: Character | null;
}

export interface Combat {
    id: string;
    game_id: string;
    combatants: Combatant[];
}
export interface Round {
    id: number;
}
