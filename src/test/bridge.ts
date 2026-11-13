import type { SetfarmStateSnapshot } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export interface SetfarmTestBridge extends SetfarmStateSnapshot {
  invokeAction: (
    actionRef: string,
    input?: Record<string, unknown>,
  ) => void;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

export function installTestBridge(bridge: SetfarmTestBridge): () => void {
  if (typeof window === "undefined") return () => undefined;

  window.__SETFARM_SCENARIO_MODE__ = "manual";
  window.__SETFARM_TEST_BRIDGE__ = bridge;

  return () => {
    if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
      delete window.__SETFARM_TEST_BRIDGE__;
    }
  };
}
