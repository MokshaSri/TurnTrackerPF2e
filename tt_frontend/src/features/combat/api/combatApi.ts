import type { Combat } from '../types/combat';

/** Stub: replace with real API when backend combats#show exists */
export async function fetchCombat(id: string): Promise<Combat> {
  // Uncomment when API is ready:
  // const res = await fetch(`/api/combats/${id}`);
  // if (!res.ok) throw new Error('Combat not found');
  // return res.json();

  // Mock data for development
  return mockCombat(id);
}

function mockCombat(combatId: string): Combat {
  return {
    id: combatId,
    game_id: 'game-1',
    combatants: [
      {
        id: 'c1',
        combat_id: combatId,
        character_id: 'char-1',
        order_index: 0,
        character: { id: 'char-1', name: 'Valeros', actor_type: 'pc' },
      },
      {
        id: 'c2',
        combat_id: combatId,
        character_id: 'char-2',
        order_index: 1,
        character: { id: 'char-2', name: 'Goblin Scout', actor_type: 'npc' },
      },
      {
        id: 'c3',
        combat_id: combatId,
        character_id: 'char-3',
        order_index: 2,
        character: { id: 'char-3', name: 'Kyra', actor_type: 'pc' },
      },
    ],
  };
}
