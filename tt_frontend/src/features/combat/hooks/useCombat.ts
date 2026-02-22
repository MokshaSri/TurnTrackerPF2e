// features/combat/hooks/useCombat.ts

import { useState, useEffect, useCallback } from 'react';
import type { Combat } from '../types/combat';
import { fetchCombat } from '../api/combatApi';

export function useCombat(combatId: string | undefined) {
  const [combat, setCombat] = useState<Combat | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(async () => {
    if (!combatId) return;
    setLoading(true);
    try {
      const data = await fetchCombat(combatId);
      setCombat(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Failed to load combat'));
    } finally {
      setLoading(false);
    }
  }, [combatId]);

  useEffect(() => {
    load();
  }, [load]);

  // Stub actions – replace with API calls when backend is ready
  const nextTurn = useCallback(() => { /* TODO */ }, []);
  const addCombatant = useCallback(() => { /* TODO */ }, []);
  const removeCombatant = useCallback((_id: string) => { /* TODO */ }, []);

  return {
    combat,
    loading,
    error,
    refetch: load,
    actions: { nextTurn, addCombatant, removeCombatant },
  };
}