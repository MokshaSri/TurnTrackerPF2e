import type { Combatant } from '../types/combat';

export function getCombatantDisplayName(combatant: Combatant): string {
  return combatant.character?.name ?? `Combatant #${combatant.id}`;
}

export function getCombatantActorType(combatant: Combatant): string {
  return combatant.character?.actor_type ?? 'npc';
}
