import { Button } from 'react-aria-components';
import type { Combat } from '../types/combat';

type Props = {
  combat: Combat;
  onNextTurn: () => void;
  onAddCombatant: () => void;
};

export function CombatToolbar({ combat: _combat, onNextTurn, onAddCombatant }: Props) {
  return (
    <header className="flex items-center gap-4 border-b border-gray-700 bg-gray-800 px-4 py-3">
      <h1 className="text-lg font-semibold">Combat</h1>
      <div className="flex gap-2">
        <Button
          onPress={onNextTurn}
          className="rounded bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-500 focus:outline focus:ring-2 focus:ring-amber-400"
        >
          Next turn
        </Button>
        <Button
          onPress={onAddCombatant}
          className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500 focus:outline focus:ring-2 focus:ring-emerald-400"
        >
          Add combatant
        </Button>
      </div>
    </header>
  );
}
