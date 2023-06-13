import { Difficulty, GameMode, GameType } from "@/classes/constants";

/**
 * Representa los datos esenciales del juego.
 */
export interface Essentials {
    /**
     * El tamaño del juego.
     */
    gameSize: number;

    /**
     * El tipo de juego.
     */
    gameType: GameType;

    /**
     * El modo de juego.
     */
    gameMode: GameMode;

    /**
     * La dificultad del juego.
     */
    gameDifficulty: Difficulty;
}
