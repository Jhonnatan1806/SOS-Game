/**
 * Representa el modo de juego.
 * @readonly
 */
export enum GameMode {
    /**
     * Juego jugador vs jugador
     */
    PVP = "J vs J",

    /**
     * Juego jugador vs IA
     */
    PVC = "J vs IA",
    
    /**
     * Juego IA vs IA
     */
    CVC = "IA vs IA",
}