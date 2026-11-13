// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


import type { RefObject } from "react";

export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };
  canvasRef: RefObject<HTMLCanvasElement>;
  gameStatus: string;
  highScore: number;
}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions, canvasRef, gameStatus, highScore }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 w-full max-w-6xl mx-auto" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_RETENTION">
          
          {/* Header / Brand area (non-actionable decorative text) */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                Canvas Arcade
              </h1>
              <p className="text-sm text-slate-400 mt-1">Single-player retro canvas adventure</p>
            </div>
      
            {/* High Score Display Surface: SURF_HIGH_SCORE_DISPLAY */}
            <div className="flex items-center gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 shadow-inner text-right">
                <span className="block text-xs uppercase font-semibold tracking-wider text-slate-400 mb-0.5">High Score</span>
                <span data-surface-id="SURF_HIGH_SCORE_DISPLAY" className="text-2xl font-mono font-bold text-amber-400" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE" data-value={String(highScore)}>{highScore}</span>
              </div>
            </div>
          </div>
      
          {/* Main Game Board Container */}
          <div className="w-full flex flex-col items-center justify-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            
            {/* Top info bar with Game Status: SURF_GAME_STATUS */}
            <div className="w-full flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Status:</span>
                <span data-surface-id="SURF_GAME_STATUS" className="text-sm font-semibold text-emerald-400" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE" data-value={gameStatus}>{gameStatus}</span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Resolution: 800 x 480
              </div>
            </div>
      
            {/* Game Canvas Surface: SURF_GAME_CANVAS */}
            <div className="relative w-full max-w-3xl aspect-[5/3] bg-slate-950 rounded-xl border border-slate-800/90 shadow-inner flex items-center justify-center overflow-hidden group">
              {/* Exact Surface Attribute for Canvas */}
              <canvas ref={canvasRef} data-surface-id="SURF_GAME_CANVAS" width="800" height="480" className="w-full h-full block bg-slate-950" data-setfarm-element-ref="E000004"></canvas>
      
              {/* Decorative Canvas Overlay / Retro Grid Details */}
              <div className="absolute inset-0 pointer-events-none border border-emerald-500/10 rounded-xl"></div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent"></div>
            </div>
      
            {/* Action Panel & Primary Control Slot */}
            <div className="w-full max-w-3xl mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
              <div className="text-xs text-slate-400">
                Press start to launch your session and begin tracking real-time stats.
              </div>
              
              {/* Only Actionable Control: CSLOT_START_GAME_START_BUTTON / ACT_START_GAME */}
              <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                Start game
              </button>
            </div>
      
          </div>
      
          {/* Decorative footer note */}
          <div className="mt-8 text-center text-xs text-slate-500">
            Canvas Start Game © 2025. All rights reserved.
          </div>
      
        </div>
    </>
  );
}
