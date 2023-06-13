/**
 * Representa el ganador del juego.
 * @readonly
 */
export enum GameWinner {
    /**
     * Ganador del juego RED
     */
    WINNER_PLAYER1 = "ROJO",

    /**
     * Ganador del juego BLUE
     */
    WINNER_PLAYER2 = "AZUL",

    /**
     * Empate
     */
    TIE = "EMPATE",

    /**
     * Sin ganador
     */
    NONE = "SIN GANADOR",
}
