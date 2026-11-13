import { STARTED_PROD_CANVAS_START_GAME_STATE } from "../../__fixtures__/prod-canvas-start-game.fixture";
import type {
  HighScoreRepository,
  ProdCanvasStartGameState,
} from "../prod-canvas-start-game/prod-canvas-start-game.types";

export const ACT_START_GAME = "ACT_START_GAME" as const;

export function actStartGame(
  highScoreRepository: HighScoreRepository,
): ProdCanvasStartGameState {
  const nextState: ProdCanvasStartGameState = {
    ...STARTED_PROD_CANVAS_START_GAME_STATE,
  };

  highScoreRepository.writeHighScore(0);
  return nextState;
}
