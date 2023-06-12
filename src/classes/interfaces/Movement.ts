import { Letter } from "@/classes/constants";

/**
 * Representa un movimiento en el tablero.
 */
export interface Movement{
    row: number;
    column: number;
    letter: Letter;
}