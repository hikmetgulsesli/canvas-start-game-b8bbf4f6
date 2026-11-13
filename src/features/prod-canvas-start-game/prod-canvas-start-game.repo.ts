import type { HighScoreRepository } from "./prod-canvas-start-game.types";

export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.canvas_start_game.high_score_local_storage.v1";

function validHighScore(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? value
    : null;
}

function decodeHighScore(raw: string | null): number | null {
  if (raw === null) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    const scalar = validHighScore(parsed);
    if (scalar !== null) return scalar;

    if (typeof parsed === "object" && parsed !== null) {
      const record = parsed as Record<string, unknown>;
      return (
        validHighScore(record.HighScore) ?? validHighScore(record.highScore)
      );
    }
  } catch {
    return null;
  }

  return null;
}

export const browserHighScoreRepository: HighScoreRepository = {
  readHighScore() {
    if (typeof window === "undefined") return null;
    return decodeHighScore(window.localStorage.getItem(HIGH_SCORE_STORAGE_KEY));
  },

  writeHighScore(highScore) {
    if (validHighScore(highScore) === null) {
      throw new Error("HIGH_SCORE_INVALID");
    }
    window.localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(highScore));
  },
};
