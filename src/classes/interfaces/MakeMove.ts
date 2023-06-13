import { Movement } from "@/classes/interfaces";

/**
 * Representa la interfaz de un crear un movimiento.
 */
export interface MakeMove {
    /**
     * Retorna un movimiento.
     *
     * @param board - El tablero del juego.
     * @param difficulty - La dificultad del juego.
     */
    getMovement(): Movement;
}
