import { GamePlayers } from "@/classes/enums/GamePlayers";

/**
 * @class GameWinner
 * @classdesc Representa el ganador del juego.
 * @readonly
 * @enum {string}
 */
export enum GameWinner {
    /**
     * Ganador del juego RED
     * 
     * @type {string}
     */
    WINNER_PLAYER1 = GamePlayers.PLAYER_ONE,

    /**
     * Ganador del juego BLUE
     * 
     * @type {string}
     */
    WINNER_PLAYER2 = GamePlayers.PLAYER_TWO,

    /**
     * Empate
     * 
     * @type {string}
     */
    TIE = "EMPATE",

    /**
     * Sin ganador
     * 
     * @type {string}
     */
    NONE = "SIN GANADOR",
}