import type { ApplicationState } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export interface GameRuntime {
  render: (applicationState: ApplicationState) => void;
  destroy: () => void;
}

export function createGameRuntime(canvas: HTMLCanvasElement): GameRuntime {
  let context: CanvasRenderingContext2D | null = null;
  let destroyed = false;

  try {
    context = canvas.getContext("2d");
  } catch {
    context = null;
  }

  const render = (applicationState: ApplicationState) => {
    if (destroyed || context === null) return;

    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#020617";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(16, 185, 129, 0.12)";
    context.lineWidth = 1;
    for (let x = 0; x <= width; x += 40) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y <= height; y += 40) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "700 28px ui-monospace, monospace";
    context.fillStyle = applicationState === "playing" ? "#34d399" : "#818cf8";
    context.fillText(
      applicationState === "playing" ? "GAME STARTED" : "READY",
      width / 2,
      height / 2,
    );

    if (applicationState === "playing") {
      context.fillStyle = "#fbbf24";
      context.fillRect(width / 2 - 8, height / 2 + 45, 16, 16);
    }
  };

  return {
    render,
    destroy() {
      destroyed = true;
      context = null;
    },
  };
}
