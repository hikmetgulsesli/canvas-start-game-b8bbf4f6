import type { ProdCanvasStartGameState } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export const INITIAL_PROD_CANVAS_START_GAME_STATE: ProdCanvasStartGameState = {
  applicationState: "ready",
  highScore: null,
};

export const STARTED_PROD_CANVAS_START_GAME_STATE: ProdCanvasStartGameState = {
  applicationState: "playing",
  highScore: 0,
};
