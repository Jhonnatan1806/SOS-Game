/**
 * @class GameState
 * @classdesc Representa el estado de un juego.
 * @readonly
 * @enum {number}
 */
export enum GameState {
    /**
     * Estado de juego en el que se está jugando
     * @type {number}
     */
    PLAYING,
    
    /**
     * Estado de juego en el que se ha terminado
     * @type {number}
     */
    FINISHED,
}