// hooks/useGameTimer.ts
import { useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';

export const useGameTimer = () => {
  const gameState = useGameStore(state => state.gameState);
  
  useEffect(() => {
    if (!gameState || gameState.gamePhase !== 'playing') return;

    const timeLeft = gameState.turnTimeout - (Date.now() - gameState.lastActionTime);
    const timer = setTimeout(() => {
      // Auto-draw card on timeout
      useGameStore.getState().drawCard();
    }, Math.max(0, timeLeft));

    return () => clearTimeout(timer);
  }, [gameState?.lastActionTime, gameState?.currentPlayer,gameState]);
};