import { GamePlayers } from "@/classes/constants";

/**
 * Representa una línea ganadora del juego.
 */
export interface WinLine {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    player: GamePlayers;
}