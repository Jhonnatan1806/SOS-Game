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
    WINNER_PLAYER1 = "ROJO",

    /**
     * Ganador del juego BLUE
     * 
     * @type {string}
     */
    WINNER_PLAYER2 = "AZUL",

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