import { useEffect, useRef } from "react";
import {
  ProdCanvasStartGameProvider,
  useProdCanvasStartGame,
} from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { createGameRuntime } from "./game/game-runtime";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";

function PlayRoute() {
  const { state, startGame } = useProdCanvasStartGame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current === null) return undefined;
    const runtime = createGameRuntime(canvasRef.current);
    runtime.render(state.applicationState);
    return () => runtime.destroy();
  }, [state.applicationState]);

  return (
    <div
      data-setfarm-root="canvas-start-game"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white flex flex-col"
    >
      <PlayPageCanvasStartGame
        canvasRef={canvasRef}
        gameStatus={state.applicationState === "playing" ? "Game started" : "Ready"}
        highScore={state.highScore ?? 0}
        actions={{ "start-game-1": startGame }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ProdCanvasStartGameProvider>
      <PlayRoute />
    </ProdCanvasStartGameProvider>
  );
}
