import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { INITIAL_PROD_CANVAS_START_GAME_STATE } from "../../__fixtures__/prod-canvas-start-game.fixture";
import { installTestBridge } from "../../test/bridge";
import { ACT_START_GAME, actStartGame } from "../surf-play-page/act_start_game";
import { browserHighScoreRepository } from "./prod-canvas-start-game.repo";
import {
  toSetfarmStateSnapshot,
  type HighScoreRepository,
  type ProdCanvasStartGameState,
} from "./prod-canvas-start-game.types";

interface ProdCanvasStartGameStore {
  state: ProdCanvasStartGameState;
  startGame: () => void;
}

const StoreContext = createContext<ProdCanvasStartGameStore | null>(null);

interface ProviderProps {
  children: ReactNode;
  repository?: HighScoreRepository;
}

export function ProdCanvasStartGameProvider({
  children,
  repository = browserHighScoreRepository,
}: ProviderProps) {
  const [state, setState] = useState<ProdCanvasStartGameState>(() => ({
    ...INITIAL_PROD_CANVAS_START_GAME_STATE,
    highScore: repository.readHighScore(),
  }));

  const startGame = useCallback(() => {
    setState(actStartGame(repository));
  }, [repository]);

  const invokeAction = useCallback(
    (actionRef: string, input: Record<string, unknown> = {}) => {
      if (actionRef !== ACT_START_GAME || Object.keys(input).length !== 0) {
        throw new Error("ACTION_INVOCATION_INVALID");
      }
      startGame();
    },
    [startGame],
  );

  const snapshot = useMemo(() => toSetfarmStateSnapshot(state), [state]);

  useEffect(
    () => installTestBridge({ ...snapshot, invokeAction }),
    [invokeAction, snapshot],
  );

  const value = useMemo(() => ({ state, startGame }), [startGame, state]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useProdCanvasStartGame(): ProdCanvasStartGameStore {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error("PROD_CANVAS_START_GAME_PROVIDER_MISSING");
  }
  return store;
}
