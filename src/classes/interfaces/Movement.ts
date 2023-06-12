import { Letter } from "@/classes/enums/Letter";

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