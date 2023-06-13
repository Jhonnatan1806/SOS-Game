import { GamePlayers } from "@/classes/constants";

/**
 * Representa una línea ganadora del juego.
 */
export interface WinLine {
    /**
     * La fila de inicio de la línea.
     */
    startRow: number;

    /**
     * La columna de inicio de la línea.
     */
    startColumn: number;

    /**
     * La fila de fin de la línea.
     */
    endRow: number;

    /**
     * La columna de fin de la línea.
     */
    endColumn: number;

    /**
     * El jugador de la línea.
     */
    player: GamePlayers;
}
