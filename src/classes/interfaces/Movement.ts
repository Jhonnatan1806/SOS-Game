import { Letter } from "@/classes/constants";

/**
 * @class Movement
 * @classdesc Representa un movimiento en el tablero.
 * @interface
 */
export interface Movement{
    row: number;
    column: number;
    letter: Letter;
}