export const STATE_APPLICATION_STATE = "STATE_APPLICATION_STATE" as const;
export const STATE_HIGH_SCORE = "STATE_HIGH_SCORE" as const;

export type ApplicationState = "ready" | "playing";

export interface ProdCanvasStartGameState {
  applicationState: ApplicationState;
  highScore: number | null;
}

export interface SetfarmStateSnapshot {
  states: {
    [STATE_APPLICATION_STATE]: ApplicationState;
    [STATE_HIGH_SCORE]: number | null;
  };
}

export interface HighScoreRepository {
  readHighScore: () => number | null;
  writeHighScore: (highScore: number) => void;
}

export function toSetfarmStateSnapshot(
  state: ProdCanvasStartGameState,
): SetfarmStateSnapshot {
  return {
    states: {
      [STATE_APPLICATION_STATE]: state.applicationState,
      [STATE_HIGH_SCORE]: state.highScore,
    },
  };
}
