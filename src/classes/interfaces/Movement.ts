import { Letter } from "@/classes/constants";

/**
 * Representa un movimiento en el tablero.
 */
export interface Movement {
    /**
     * La fila del movimiento.
     */
    row: number;

    /**
     * La columna del movimiento.
     */
    column: number;

    /**
     * La letra del movimiento.
     */
    letter: Letter;
}
