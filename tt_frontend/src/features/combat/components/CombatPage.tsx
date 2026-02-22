import { useParams } from 'react-router-dom';
import { useCombat } from '../hooks/useCombat';
import { CombatToolbar } from './CombatToolbar';
import { TurnOrderList } from './TurnOrderList';

export function CombatPage() {
  const { combatId } = useParams<{ combatId: string }>();
  const { combat, loading, error, actions } = useCombat(combatId);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-100">
        <p>Loading combat…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-red-400">
        <p>{error.message}</p>
      </div>
    );
  }

  if (!combat) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-100">
        <p>Combat not found.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-gray-900 text-gray-100">
      <CombatToolbar
        combat={combat}
        onNextTurn={actions.nextTurn}
        onAddCombatant={actions.addCombatant}
      />
      <main className="flex-1 overflow-auto p-4">
        <TurnOrderList combatants={combat.combatants} />
      </main>
    </div>
  );
}
