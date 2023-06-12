/**
 * @class GameMode
 * @classdesc Representa el modo de juego.
 * @readonly
 * @enum {string}
 */
export enum GameMode {
    /**
     * Juego jugador vs jugador
     * @type {string}
     */
    PVP = "J vs J",

    /**
     * Juego jugador vs IA
     * @type {string}
     */
    PVC = "J vs IA",
    
    /**
     * Juego IA vs IA
     * @type {string}
     */
    CVC = "IA vs IA",
}