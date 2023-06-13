import { Difficulty, GameMode, GameType } from "@/classes/constants";

/**
 * Representa los datos esenciales del juego.
 */
export interface Essentials {
    gameSize: number;
    gameType: GameType;
    gameMode: GameMode;
    gameDifficulty: Difficulty;
}